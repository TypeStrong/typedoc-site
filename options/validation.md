---
layout: "guide"
tags: guide
eleventyNavigation:
    order: 5
    key: Validation
    parent: Options
---

# Validation Options

Options that control how TypeDoc validates your documentation.

## validation

CLI:

```bash
$ typedoc --validation.invalidLink
$ typedoc --validation
```

typedoc.json (defaults):

```json
{
    "validation": {
        "notExported": true,
        "invalidLink": true,
        "notDocumented": false
    }
}
```

Specifies validation steps TypeDoc should perform on your generated documentation.

## treatWarningsAsErrors

```bash
$ typedoc --treatWarningsAsErrors
```

Causes TypeDoc to treat any reported warnings as fatal errors that can prevent documentation from being generated.

## treatValidationWarningsAsErrors

```bash
$ typedoc --treatValidationWarningsAsErrors
```

Limited version of `treatWarningsAsErrors` that only applies to warnings emitted during validation of a project.
This option cannot be used to turn `treatWarningsAsErrors` off for validation warnings.

## intentionallyNotExported

Lists symbols which are intentionally excluded from the documentation output and should not produce warnings.
Entries may optionally specify a file name before a colon to only suppress warnings for symbols declared in a specific file.

typedoc.json:

```json
{
    "intentionallyNotExported": ["InternalClass", "src/other.ts:OtherInternal"]
}
```

## requiredToBeDocumented

Set the list of reflection types that must be documented, used by `validation.notDocumented`

typedoc.json:

```json
{
    "requiredToBeDocumented": ["Enum", "Class"]
}
```
