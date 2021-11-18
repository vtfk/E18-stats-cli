# E18 Statistics CLI

## Usage

### add stats

Unfortunately nodejs removes all double quotes from input. To *handle* this, you must replace all double quotes (`"`) with escaped double quotes (`\"`)

```powershell
$stats = @{
  system = "MySystem"
  type = "MyType"
}
e18 add (($stats | ConvertTo-Json -Compress).Replace('"', '\"'))
```
