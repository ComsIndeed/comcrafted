cd ComCrafted
start cmd.exe /c npm run dev
start cmd.exe /c code ./src | exit
TIMEOUT /T 5
start microsoft-edge:http://localhost:5173/ | exit