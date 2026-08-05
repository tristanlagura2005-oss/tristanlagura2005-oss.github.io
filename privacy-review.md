# Privacy and Image Sanitization Review

## Review scope

Every image included in the public portfolio package was reviewed separately from the uploaded original. The public package contains only cropped, re-encoded, or otherwise sanitized copies. The original uploaded screenshots and photographs are not included.

## Personal photographs

### Hero desk photograph

Public files:

```text
assets/images/profile/tristan-lagura-desk-480.*
assets/images/profile/tristan-lagura-desk-720.*
assets/images/profile/tristan-lagura-desk-960.*
```

Actions completed:

- Preserved Tristan Lagura's natural appearance and proportions.
- Used a professional crop that keeps the desk, laptop, notebook, and cup visible.
- Did not replace the background or generate a different office scene.
- Did not add clothing, reshape facial features, or apply a beauty filter.
- Re-encoded the image to strip unnecessary source metadata.
- Created compressed JPG and WebP sizes for responsive loading.

### Professional headshot

Public files:

```text
assets/images/profile/tristan-lagura-headshot-400.*
assets/images/profile/tristan-lagura-headshot-640.*
assets/images/profile/tristan-lagura-headshot-800.*
```

Actions completed:

- Preserved the subject's face, identity, skin texture, and natural proportions.
- Tightened the crop to remove an unnecessary lower-right decorative mark from the source edge.
- Did not synthesize or replace any part of the face or body.
- Re-encoded the image to strip unnecessary source metadata.
- Created compressed JPG and WebP sizes for responsive loading.

## Store screenshots

### Store home screenshot

Public files:

```text
assets/images/projects/shopify-store-home-sanitized.*
```

Removed or excluded:

- Account name and profile controls
- Private dashboard navigation
- Notification controls
- Search shortcut and account context
- Membership-status banner
- Task counter
- Chat/support widget
- Unrelated application chrome

Retained:

- Public storefront design
- Store hero content
- Product-search presentation
- Public-facing merchandising and trust elements

### Product collection screenshot

Public files:

```text
assets/images/projects/shopify-product-collection-sanitized.*
```

Removed or excluded:

- Account name and profile controls
- Private top navigation
- Search shortcut tied to account context
- Task counter
- Chat/support widget
- Unrelated application chrome

Retained:

- Product-card structure
- Collection presentation
- Public product names and visible merchandising layout
- Public price-match callout

## CSV and spreadsheet screenshots

### Bulk catalog excerpt

Public files:

```text
assets/images/projects/shopify-csv-bulk-sanitized.*
```

Obscured:

- Product handles
- Product-specific titles and long descriptions
- Vendor-specific row values
- Product-specific identifiers and SKUs
- Price-related row values

Retained:

- Shopify-compatible field headings
- Option and variant structure
- Published status
- Inventory policy and fulfillment structure
- Representative evidence of large-scale spreadsheet processing

### Product field-map excerpt

Public files:

```text
assets/images/projects/shopify-csv-fields-sanitized.*
```

Obscured:

- Product handle, title, description, and vendor values
- Product-specific identifiers, SKU, and barcode information
- Image-source URL data
- Price-related information

Retained:

- Product, option, variant, inventory, image-position, and alt-text field structure
- Representative workflow evidence without exposing a full dataset

Both spreadsheet images include a visible note stating that selected identifiers or values were intentionally obscured.

## Python code screenshot

Public files:

```text
assets/images/projects/python-product-scraper-safe-excerpt.*
```

Review completed for:

- Passwords
- API keys
- Access tokens
- Session tokens
- Cookies
- Login credentials
- Client secrets
- Private URLs
- Private local file paths
- Personal or customer information

The published crop contains a limited excerpt showing imports, comments, inventory settings, and general configuration structure. No password, key, token, cookie, customer record, or login credential is visible. The full proprietary source code is not included.

## Promotional graphics

Public files:

```text
assets/images/projects/pampa-lighting-promotion.*
assets/images/projects/build-with-sunshine-promotion.*
assets/images/projects/tosot-hvac-promotion.*
```

Actions completed:

- Retained approved client branding and visible promotional text.
- Re-encoded the images to strip unnecessary source metadata.
- Did not present the client brands as Tristan Lagura's companies.
- Added a portfolio note stating that brand ownership remains with the respective company and that display does not imply endorsement.

## Social-sharing images

Public files:

```text
assets/images/social/tristan-lagura-portfolio-og.*
assets/images/social/tristan-lagura-avatar.*
```

Actions completed:

- Built from the supplied personal photographs without changing identity.
- Included only public professional name, title, and domain.
- Included no residential address, private account information, customer data, or credentials.

## Final package review

Confirmed for the public ZIP:

- No uploaded original screenshot is included.
- No private account name or user-profile control remains in the store images.
- No task counter, notification control, or chat widget remains in the store images.
- No full product dataset is included.
- No supplier URL or private image URL is readable in the spreadsheet evidence.
- No password, API key, token, cookie, or login credential is visible.
- No customer information is visible.
- Sanitized images remain clear enough to demonstrate the work.
- Client branding is presented only as approved portfolio work and not as an endorsement.
