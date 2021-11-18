# E18 Statistics CLI

## Usage

Create a `.env` file with these variables
```bash
API_URL=http://localhost:8080/api
API_HEADER_TOKEN=X-API-KEY
API_TOKEN=SecretTokenKey
```

### add stats

Unfortunately nodejs removes all double quotes from input. To *handle* this, you must replace all double quotes (`"`) with escaped double quotes (`\"`)

```powershell
$stats = @{
  system = "MySystem"
  type = "MyType"
}
e18 add (($stats | ConvertTo-Json -Compress).Replace('"', '\"'))
```
