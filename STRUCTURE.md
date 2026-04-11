## Workflow 
User edits data in Grid → Click "Process" → Send to backend → Receive results → Update Grid + Chart

## Repo Structure
```
components/
  Grid.tsx
  Chart.tsx
  ResultsContainer.tsx
  ProcessButton.tsx (optional)
  Loading.tsx
  Error.tsx

services/
  api.ts

utils/
  transforms.ts
```