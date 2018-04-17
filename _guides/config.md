---
layout: 'guide'
title: 'Configuration'
menuOrder: 5
---

# Configuration

Options in tsconfig.json

## TypedocOptions

Various command line arguments can also be specified in a top level tsconfig.json file.
Example:
```json
{
    "typedocOptions": {
        "out": "path/to/documentation",
        "name": "Documentation title"
    }
}
```
