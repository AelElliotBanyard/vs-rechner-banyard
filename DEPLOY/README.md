<p align="center">
  <a href="https://banyard.tech">
    <picture>
      <img src="../DOCS/LOGO.png" width="100%">
    </picture>
  </a>
</p>

# Deploy

This folder contains all the files needed to deploy the Web App to a server.

## How to deploy

There are two ways to deploy the Web App.
1. Using Docker
2. With cloud-init

### Using Docker

To deploy the Web App using Docker you need to have Docker installed on your server.
Then all you need to do is run the following command in the directory where the Dockerfile is located.

```bash
docker build -t insurance .
```

This will build the Docker image for the Web App.
To run the Web App you need to run the following command.

```bash
docker run -d -p 3000:3000 insurance
```

This will run the Web App on port 3000.
If you want to run the Web App on a different port you need to change the first number in the command.
The second number is the port the Web App will run on inside the Docker container.
This should not be changed.

### With cloud-init

This is only possible if you are using a cloud provider that supports cloud-init.
If you are using a cloud provider that supports cloud-init you can use the cloud-init file in this directory to deploy the Web App.

If you do not know how to use cloud-init you can find more information [here](https://cloudinit.readthedocs.io/en/latest/).