# Docker container Setup

1. Install Docker from the [Docker site](https://docs.docker.com/get-docker/)
2. Download the DX Docker container from [Flexnet](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/logon.do). 
3. Extract the large zip file and you will end up with multiple container packages
4. The largest container file is the core DX image. It will probably be named like hcl-dx-core-image-v95-xxxxxxxx-xxxx.tar.gz
5. Load the container into your local docker environment

        ```docker load < hcl-dx-core-image-v95-xxxxxxxx-xxxx.tar.gz```
6. You should now have a new image we can use:

        ```
        c:> docker images
        REPOSITORY      TAG                     IMAGE ID        CREATED SIZE
        ...
        hcl/dx/core     v95_CF18_20200427-2055  ae54e9f9f56a    8 weeks ago 17GB
        ...
        ```
7. To run the container you can use the docker-compose.yml file or run it with Docker run. By default the server will be at http://localhost:10039/wps/portal and the admin user and password are wpsadmin.
8. Since you will be making changes which require re-boots it is advisable to map a volume into the container. This way if you delete the container, you will not have to reapply the settings when creating new containers. You can see an example volume in the docker-compose.yml file.
9. For more information see the container documentation at the [HCL documentation](https://help.hcltechsw.com/digital-experience/9.5/install/rm_container_deployment.html), specifically on [docker deployments](https://help.hcltechsw.com/digital-experience/9.5/containerization/docker.html).

#### Return to the [README.md](./README.md)