import { exec } from 'child_process';
import { config } from 'dotenv';

config({path: './.dxclient.env'});

let verbose = (process.env.verbose === "true"); 

const dxClientCommand = `dxclient deploy-scriptapplication push` + 
` -dxProtocol \"${process.env.dxProtocol}\"` +
` -hostname \"${process.env.dxHostName}\"` +
` -dxPort \"${process.env.dxPort}\"` +
` -dxUsername \"${process.env.dxUserName}\"` +
` -dxPassword \"${process.env.dxPassword}\"` +
` -contenthandlerPath \"${process.env.dxContentHandlerPath}\"` +
` -virtualPortalContext \"${process.env.dxVirtualPortalContext}\"` +
` -projectContext \"${process.env.dxProjectContext}\"` +
` -mainHtmlFile \"${process.env.dxMainHtmlFile}\"` +
` -wcmSiteArea \"${process.env.dxSiteArea}\"` +
` -wcmContentName \"${process.env.dxContentName}\"` +
` -wcmContentTitle \"${process.env.dxContentTitle}\"` +
` -contentRoot \"${process.env.dxContentRoot}\"`;

if(verbose) {
  console.log(dxClientCommand);
}

exec(dxClientCommand, (err, stdout, stderr) => {
  
  console.log(stdout);

  if (err) {
    if(verbose){
      console.error(`\n${err}\n`);
    } else {
      console.log(`\nError calling dxclient. Please set verbose=true in .dxclient.env to see error details.\n`);
    }
  }
});

