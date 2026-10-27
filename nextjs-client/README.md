# Yema Yoga website

Next.js Pages Router website with English/Korean content from Sanity. The
separate `../sanity-studio` app manages content and the Netlify deployment widget.

## Local development and checks

Use Node.js 24 (`nvm use` reads `.nvmrc`) and npm. `package-lock.json` is the
single dependency lockfile; do not regenerate a Yarn lockfile.

1. Copy `.env.example` to `.env.local` and fill in the contact integration values.
   The public Sanity project/dataset values already match the Studio.
2. Run `npm ci`.
3. Run `npm run dev` and visit http://localhost:3000.

Run `npm run lint` and `npm run build` before deploying. The production build
reads published Sanity content and needs network access. The Sanity variables
are required to build; Maps, reCAPTCHA, and SMTP settings are also required to
fully exercise the contact page and email delivery. `npm start` serves the
completed production build locally.

The site stays on React 18 for compatibility with the existing UI libraries.
Next.js 16 supports this in Pages Router but warns that Next.js 17 will require
React 19. Existing image layouts use `next/legacy/image` during this migration.

## Netlify deployment

In the existing Netlify site's build settings, confirm:

- Base directory: `nextjs-client`
- Build command: `npm run build`
- Publish directory: `.next` (relative to the base directory)
- Production branch: the branch containing these changes
- Environment variables: all names in `.env.example`, with real integration
  credentials stored in Netlify rather than committed to Git

`netlify.toml` pins Node 24, matching `.nvmrc` and `package.json`. It explicitly
enables `@netlify/plugin-nextjs`, whose v5 version is locked in `package-lock.json`.
This existing Netlify site did not auto-enable the adapter after the v4 entry
was removed. Without the adapter, publishing raw `.next` output succeeds but
serves Netlify 404 pages because no routes or server functions are generated.

Check the deploy log for Node 24, Next.js 16, and `Using Next.js Runtime - v5`.
The adapter must run after `next build`, and the deploy must include its server
function. If the runtime line is missing or the deploy reports zero functions,
do not consider that deployment healthy. Remove conflicting legacy adapter pins
in the Netlify UI. Clear the build cache for the first deploy after this fix.

## Deploying from Sanity

The existing widget in `../sanity-studio/src/dashboardConfig.js` triggers the
Netlify website build hook. It does not build the website inside Sanity Studio.
No widget changes are needed if the existing site and hook are still valid.

1. Push the website changes to the branch targeted by the Netlify build hook.
2. Complete the first successful Netlify deployment with the cache cleared.
3. Publish a content update in Sanity, then use its deployment widget.
4. Confirm that Netlify creates a new successful deploy from the expected branch.

If clicking the widget creates no deployment, confirm builds are active and
the hook still exists under Netlify's Continuous deployment > Build hooks.
If it must be replaced, update `buildHookId` in the Studio's dashboard config
and redeploy the Studio. If a deployment starts but fails, inspect its build
log: that is a website build failure rather than a missing trigger.

Maintenance switches are content settings. Leave them enabled until the
instructor has approved the current location, schedule, and prices. Publishing
a switch change also requires a website rebuild.
