import * as ftp from "basic-ftp";
import "dotenv/config";

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true; 

    try {
        console.log("Verbinde mit Infomaniak...");
        await client.access({
            host: process.env.FTP_HOST,         
            user: process.env.FTP_USER,         
            password: process.env.FTP_PASSWORD, 
            secure: false                
        });
        
        console.log("Verbunden! Lade neue Dateien hoch...");
        await client.uploadFromDir("dist");       
        console.log("✅ Upload erfolgreich abgeschlossen!");

    } catch(err) {
        console.error("❌ Fehler beim Upload:", err);
    }
    client.close();
}

deploy();