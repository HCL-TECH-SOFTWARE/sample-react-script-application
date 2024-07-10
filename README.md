# HCL DX React Script App Examples

## Overview

This example app shows how React can be used in Script App portlets.

There are two samples, a basic one and one covering routing.

- [Basic sample](./sample-basic/README.md)
- [Routing sample](./sample-routing/README.md)

The basic sample covers deployment using dxclient to an HCL DX instance.

For more information on how to build and deploy DX Script Apps, see the following links:

- [Script Application Section in the official HCL DX documentation](https://opensource.hcltechsw.com/digital-experience/CF220/extend_dx/script_application/)
- [HCL Webinar for the Script Application](https://register.gotowebinar.com/register/7426671489876419343)

For more information on dxclient see its documentation [here](https://help.hcltechsw.com/digital-experience/9.5/containerization/dxclient.html) and [here](https://help.hcltechsw.com/digital-experience/9.5/containerization/scriptapplications.html#scriptapplications__section_um4_jqg_w4b).

Webpack is used to package the React components and create a build folder. The example uses [dxclient](https://help.hcltechsw.com/digital-experience/9.5/containerization/dxclient.html) to deploy to the HCL DX 9.5 server (CF19 and later). (See older versions of this project to use Web Developer Toolkit if using versions prior to CF19)

