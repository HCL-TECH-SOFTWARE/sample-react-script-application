# HCL DX React Script App Examples

## Overview

This example app shows how React can be used in Script App portlets.

There are two samples, a basic one and one covering routing.

- [Basic sample](./sample-basic/README.md)
- [Routing sample](./sample-routing/README.md)

The basic sample covers deployment using dxclient to an HCL DX instance.

## Basic installation steps

1. If you want to install a local DX docker container to run against, see the instructions [here](./docker.md).

3. Install [Node.js](https://nodejs.org/en/download/).

4. Clone this project somewhere on your drive

5. ### DXClient:

    Since CF221 you can install dxclient using npm and no longer need to manually install the image or local code. Uninstall any previous versions you have installed first. The sample projects have been updated to use this approach.

    ### Install/Uninstall DXClient from NpmJS registry

    Install dxclient from the [npmjs.com](https://www.npmjs.com/package/@hcl-software/dxclient?activeTab=readme):

    Use `npm install -g @hcl-software/dxclient` command to install DXClient globally.

    Use `npm uninstall -g @hcl-software/dxclient` command to uninstall.

    This option to install/uninstall are avaialble from HCL DX 9.5 CF221 deployment. The latest version you install will be "221.0.0".

    For more information on dxclient see its documentation [here](https://opensource.hcltechsw.com/digital-experience/latest/extend_dx/development_tools/dxclient/) and [here](https://opensource.hcltechsw.com/digital-experience/CF220/extend_dx/script_application/).

6. ## Script Applications:
    For more information on how to build and deploy DX Script Apps, see the following links:

    - [Script Application Section in the official HCL DX documentation](https://opensource.hcltechsw.com/digital-experience/CF220/extend_dx/script_application/)
    - [HCL Webinar for the Script Application](https://register.gotowebinar.com/register/7426671489876419343)

7. Read the README.md in each sub project to set up and run the sample.

Webpack is used to package the React components and create a build folder. The example uses [dxclient](https://help.hcltechsw.com/digital-experience/9.5/containerization/dxclient.html) to deploy to the HCL DX 9.5 server (CF19 and later). (See older versions of this project to use Web Developer Toolkit if using versions prior to CF19)

