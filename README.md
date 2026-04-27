# ROTA Mostar Website

React/Vite Website fuer das Restaurant ROTA in Mostar.

## Entwicklung

```bash
npm install
npm run dev
```

Produktionsbuild:

```bash
npm run build
```

## Sicherheitsregeln vor jedem Push

Keine sensitiven Daten ins Repository pushen.

Nicht committen:

- `.env`, `.env.local`, `.env.production`, `.env.*`
- API Keys, Tokens, Passwoerter oder private Zugangsdaten
- Vercel Tokens, Firebase Keys, OpenAI Keys oder andere Provider-Secrets
- private Kundendaten, Rechnungen, interne Chats oder private Dokumente
- persoenliche Dateien aus Downloads/Desktop
- lokale Build- und Cache-Ordner wie `dist`, `node_modules`, `.vite`

Vor jedem Push ausfuehren:

```bash
git status
git diff --cached
```

Wenn versehentlich ein Secret committed wurde:

1. Secret sofort beim Anbieter rotieren/loeschen.
2. Datei aus dem Commit entfernen.
3. Git-History bereinigen, falls das Secret bereits gepusht wurde.

## Environment Variablen

Lokale Konfiguration gehoert nur in `.env.local`.

Beispiel:

```bash
VITE_PUBLIC_EXAMPLE=value
```

Wichtig: Nur Werte mit `VITE_` sind im Frontend sichtbar. Trotzdem keine geheimen Werte in Frontend-Variablen speichern.

## Deployment

Secrets fuer Deployment gehoeren in das Dashboard des Hosting-Anbieters, nicht in den Code.

Bei Vercel:

- Project Settings
- Environment Variables
- Secret dort eintragen

Danach lokal nur mit Platzhaltern arbeiten.
