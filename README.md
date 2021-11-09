# 1 քայլ : npm i -g typescript


# Առաջին, և հետագա կոմպիլացիայի համար "js" պապկում պետք է հավաքել
tsc script.ts
# եթե TypeScript կա համակարգչում պետք է գեներացվի "script.js" ֆայլը, որն էլ մենք միացնում ենք html-ին



# TypeScript project init
tsc --init => tsconfig.json ֆայլ կգեներացվի TypeScript "config"-րով
sourceMap": true,  այդ ֆայլում գրելուց հետո, մեզ ամեն անգամ էլ հարկավր չի լինի կոմպիլացիայի համար 
հավաքել tsc <fileName>- բավական է <tsc> հրամանը, այն կկոմպիլացնի բոլոր "ts" ֆայլերը նշված ուղում։

# AutoCompile
tsconfig.json ֆայլում պետք է ավելացնել "watch":true հրամանը ավտոմատ կոմպիլացիա ստանալու համար
<tsc> հրամանը հավաքելուց հետո այն կսկսի հետևել թարմացնելով այն ավտոմատ
console.log(1 + true); TypeScript-ում արդեն "error" կտա

Բացի այդ TypeScript-ը կախված տիպից մեզ հուշում է հնարավոր մեթոդները, օրինակ զանգվածի դեպքւմ "arr."-ից հետո կհայտնվեն բոլոր հնարավոր մեթոդները 



` Set - ExecutionPolicy - ExecutionPolicy RemoteSigned ` 
` Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted `