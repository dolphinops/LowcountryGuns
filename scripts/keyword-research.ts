/**
 * LCGUNS — Google Ads Keyword Planner Research
 * Pulls keyword ideas for local gun range / sporting goods / gun store terms
 * around Hardeeville, SC (29927) and nearby cities.
 *
 * Usage: npx tsx scripts/keyword-research.ts
 */

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

// Load env FIRST before any other module reads process.env
dotenv.config({ path: '.env.local' });

import { GoogleAdsApi, enums } from 'google-ads-api';

const CUSTOMER_ID = (process.env.GOOGLE_ADS_CUSTOMER_ID || '').replace(/-/g, '');
const LOGIN_ID = (process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID || '').replace(/-/g, '');

if (!CUSTOMER_ID) { console.error('❌ GOOGLE_ADS_CUSTOMER_ID is not set'); process.exit(1); }
console.log('🔑 Customer ID:', CUSTOMER_ID);
console.log('🔑 Login ID:', LOGIN_ID || '(same as customer)');

const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID!,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET!,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN!,
});

const customer = client.Customer({
  customer_id: CUSTOMER_ID,
  refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN!,
  // Only set login_customer_id if it differs (MCC scenario)
  ...(LOGIN_ID && LOGIN_ID !== CUSTOMER_ID ? { login_customer_id: LOGIN_ID } : {}),
});

const SEED_KEYWORDS = [
  'indoor gun range',
  'shooting range near me',
  'gun range near me',
  'indoor shooting range Hardeeville SC',
  'gun range Hilton Head',
  'gun range Savannah GA',
  'gun store near me',
  'sporting goods store near me',
  'firearm store Bluffton SC',
  'gun shop Hilton Head',
  'CWP class South Carolina',
  'concealed carry permit class SC',
  'firearm training near me',
  'machine gun rental range',
  'gun rental near me',
  'NRA pistol instructor',
  'indoor shooting range near Savannah',
  'gun range Beaufort SC',
  'things to do Hilton Head Island',
  'shooting range Bluffton SC',
];

// ─── Geographic targeting ─────────────────────────────────────────────────────
// Hardeeville SC = geo target constant 1015498
// Savannah GA metro = 1015254
// Hilton Head Island = 1015489
// Beaufort SC = 1015475
const GEO_TARGET_CONSTANTS = [
  'geoTargetConstants/1015498', // Hardeeville SC
  'geoTargetConstants/1015254', // Savannah GA
  'geoTargetConstants/1015489', // Hilton Head Island
  'geoTargetConstants/1015475', // Beaufort SC
];

// ─── Competition labels ───────────────────────────────────────────────────────
const COMP = { 0: 'UNSPECIFIED', 1: 'UNKNOWN', 2: 'LOW', 3: 'MEDIUM', 4: 'HIGH' } as Record<number, string>;

function formatVolume(v: number | null | undefined): string {
  if (!v) return '—';
  if (v >= 1000) return `${(v / 1000).toFixed(1)}K`;
  return String(v);
}

interface KeywordResult {
  keyword: string;
  monthlySearches: number;
  competition: string;
  lowCpcMicros: number;
  highCpcMicros: number;
  lowCpcDollars: string;
  highCpcDollars: string;
}

(async () => {
  console.log('\n🔍 Lowcountry Guns — Keyword Planner Research\n');
  console.log(`📍 Customer ID: ${CUSTOMER_ID}`);
  console.log(`🌐 Location: Hardeeville SC + Savannah GA + Hilton Head + Beaufort\n`);

  try {
    const response = await customer.keywordPlanIdeas.generateKeywordIdeas({
      customer_id: CUSTOMER_ID,
      keyword_seed: { keywords: SEED_KEYWORDS },
      geo_target_constants: GEO_TARGET_CONSTANTS,
      language: 'languageConstants/1000', // English
      keyword_plan_network: enums.KeywordPlanNetwork.GOOGLE_SEARCH_AND_PARTNERS,
    } as any);

    const ideas: any[] = response?.results ?? (Array.isArray(response) ? response : [response]);

    const results: KeywordResult[] = (ideas as any[])
      .map((idea: any) => {
        const metrics = idea.keyword_idea_metrics;
        return {
          keyword: idea.text,
          monthlySearches: metrics?.avg_monthly_searches ?? 0,
          competition: COMP[metrics?.competition ?? 0] ?? 'UNKNOWN',
          lowCpcMicros: metrics?.low_top_of_page_bid_micros ?? 0,
          highCpcMicros: metrics?.high_top_of_page_bid_micros ?? 0,
          lowCpcDollars: `$${((metrics?.low_top_of_page_bid_micros ?? 0) / 1_000_000).toFixed(2)}`,
          highCpcDollars: `$${((metrics?.high_top_of_page_bid_micros ?? 0) / 1_000_000).toFixed(2)}`,
        };
      })
      .sort((a, b) => b.monthlySearches - a.monthlySearches);

    // ─── Console output ──────────────────────────────────────────────────────
    console.log('─'.repeat(90));
    console.log(`${'KEYWORD'.padEnd(45)} ${'VOL/MO'.padStart(8)} ${'COMPETITION'.padEnd(12)} ${'CPC RANGE'.padStart(18)}`);
    console.log('─'.repeat(90));

    results.slice(0, 50).forEach(r => {
      const vol = formatVolume(r.monthlySearches).padStart(8);
      const comp = r.competition.padEnd(12);
      const cpc = `${r.lowCpcDollars}–${r.highCpcDollars}`.padStart(18);
      console.log(`${r.keyword.slice(0, 44).padEnd(45)} ${vol} ${comp} ${cpc}`);
    });

    console.log('─'.repeat(90));
    console.log(`\n✅ ${results.length} total keyword ideas returned.\n`);

    // ─── Segment by category ─────────────────────────────────────────────────
    const highVolume = results.filter(r => r.monthlySearches >= 1000);
    const mediumVolume = results.filter(r => r.monthlySearches >= 100 && r.monthlySearches < 1000);
    const lowComp = results.filter(r => r.competition === 'LOW' && r.monthlySearches >= 50);

    console.log(`📊 HIGH VOLUME (≥1K/mo): ${highVolume.length} keywords`);
    highVolume.forEach(r => console.log(`   • ${r.keyword} — ${formatVolume(r.monthlySearches)}/mo [${r.competition}] ${r.lowCpcDollars}–${r.highCpcDollars}`));

    console.log(`\n📊 MEDIUM VOLUME (100–999/mo): ${mediumVolume.length} keywords`);
    mediumVolume.slice(0, 20).forEach(r => console.log(`   • ${r.keyword} — ${formatVolume(r.monthlySearches)}/mo [${r.competition}] ${r.lowCpcDollars}–${r.highCpcDollars}`));

    console.log(`\n📊 LOW COMPETITION OPPORTUNITIES (≥50/mo): ${lowComp.length} keywords`);
    lowComp.slice(0, 15).forEach(r => console.log(`   • ${r.keyword} — ${formatVolume(r.monthlySearches)}/mo [${r.competition}] ${r.lowCpcDollars}–${r.highCpcDollars}`));

    // ─── Save JSON output ────────────────────────────────────────────────────
    const outPath = path.join('scripts', 'keyword-results.json');
    fs.writeFileSync(outPath, JSON.stringify({ timestamp: new Date().toISOString(), customer_id: CUSTOMER_ID, results }, null, 2));
    console.log(`\n💾 Full results saved to ${outPath}\n`);

  } catch (e: any) {
    console.error('\n❌ API Error:', e?.message ?? e);
    if (e?.errors) console.error('Details:', JSON.stringify(e.errors, null, 2));
    process.exit(1);
  }
})();
