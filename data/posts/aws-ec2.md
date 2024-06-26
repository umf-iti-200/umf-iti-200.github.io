---
title: AWS EC2 (Elastic Compute Cloud)
authorName: Thiago Ferreira
authorId: thiago-ferreira
publishedAt: March 22, 2024 12:00 PM
category: Amazon AWS
tags:
  - aws
  - amazon
  - ec2
---

# Introduction

Amazon EC2 (Elastic Compute Cloud) is a simple web interface to create and manage Amazon EC2 instances and resources. Using this service, you can create and manage your servers. Amazon EC2 offers the broadest and deepest **computing platform**, with over 500 instances and a choice of the latest processor, storage, networking, operating system, and purchase model to help you best match the needs of your workload.

# Before You Begin

If you did not create yet an AWS account, please follow <a href="/posts/create-a-new-aws-account">this tutorial</a>. If you already have an account, just sign in to Console.

# Create an EC2 Server

On your Console Home, look for <code>Services</code> on the top navbar and then go to <code>Compute → EC2</code>.

<img  src="https://user-images.githubusercontent.com/114015/224560899-a2534981-9fcb-46c7-98ff-5d8c6c07eadf.png">

When you access EC2, the image below shows its homepage.

<img src="https://user-images.githubusercontent.com/114015/224561673-c1280961-d58c-4422-9aab-df733bef2ba5.png">

If this is your first time accessing this service, you will see 0 instances running. But, what is an instance? An instance is a computer running in the cloud (or just a "virtual computer"). If you would like to create a new instance, on the homepage, search for <em>Launch Instance</em>. You are going to answer several questions while setting up a new instance.

<img width="250" src="https://user-images.githubusercontent.com/114015/224561798-4642b88d-911d-4aea-a386-0d0862978e92.png">

The first information is the name of your instance. For this tutorial, just type <code>backend-server</code>. However, you may pick another name based on your preference.

<img width="250" src="https://user-images.githubusercontent.com/114015/224561921-222fc68d-d4d7-4b30-a37c-fcc245554f7a.png">

The second step is to select the <em>Application and OS images</em>. In this one, you will set which Operating System are you planning to use. Because we want to use the free tier of Amazon AWS, it is important to keep the 'default' settings as stated in the image below. Anything other than that can cost you extra money.

<img src="https://user-images.githubusercontent.com/114015/224562139-dd5292db-4e34-4e97-a364-1097445489fb.png">

The next type is the <em>Instance Type</em>. Here you are going to select how "powerful" the instance is. Again, we want to be under the free tier. So, select <code>t2.micro</code>. As you can see, this machine has only 1 vCPU (or Virtual CPU) and 1 GiB as RAM. This is sufficient for this tutorial. Again, avoid selecting other types. It will cost you extra money.

<img src="https://user-images.githubusercontent.com/114015/224562246-ef58a892-f151-487c-94c7-cc7850cd0d61.png">

The next step is the <em>Key pair (login)</em>. Once you have your instances ready and running, you will need this information to access them because AWS EC2 uses [SSH](https://en.wikipedia.org/wiki/Secure_Shell) to access instances. So, let's create a new key pair.

<img  src="https://user-images.githubusercontent.com/114015/224562538-e3f6d78d-43ba-4597-a713-dc72d9c6c92d.png">

A dialog window will open. Just type a name for your key pair and keep the remaining options set as default. As a suggestion for this tutorial, just type your **first name** and keep the current selection as it is. Press <em>Create key pair</em>.

<img width="250" src="https://user-images.githubusercontent.com/114015/224562656-efaf808f-83e5-4cf6-927f-ab6ee344e35c.png">

If everything goes well, you will be asked to download a file <code><YOUR_NAME>.pem</code> and then you should see the key pair you have just created as selected.

<img width="250" src="https://user-images.githubusercontent.com/114015/224562750-f071b083-c902-44b2-adc0-ecd912c5c978.png">

The next step is to select <em>Network Type</em>. You will choose the type of traffic your "virtual laptop" will allow from the outside. Just for this tutorial, select HTTPS and HTTP. In a real or production environment, I would recommend you select only HTTPS.

<img width="250" src="https://user-images.githubusercontent.com/114015/224562920-4fcb6d3c-b942-41a1-ad3f-5f10f2ea6b51.png">

For <em>Configure Storage</em>, just keep the default option.

<img src="https://user-images.githubusercontent.com/114015/224563093-dc514bf5-8f18-45f4-a8a9-f3f50bd22a54.png">

That's it. You did all the basic settings for your instance. On the right side, you can see a summary of all options you have selected so far. Just click on <em>Launch instance</em>.

<img src="https://user-images.githubusercontent.com/114015/224563217-757ae920-3c37-447c-9aa4-29b1c80bdd6e.png">

If you go back to the EC2's homepage, you have now 1 instance running.

<img src="https://user-images.githubusercontent.com/114015/224563311-67081102-f124-45ad-bed4-1c681b8d94ed.png">

If you click on it, you can see that your instance is now running.

<img src="https://user-images.githubusercontent.com/114015/224563325-6aad312f-d839-448e-9c63-2a8ead202b8b.png">

# Accessing Your Instance

## Linux and Mac

If you are using Linux or Mac, you need to change the permissions on your key pair file by typing the following command:

```shell
chmod 400 <YOUR_NAME>.pem
```

Don't forget to change <code><YOUR_NAME>.pem</code>. If you don’t change the permission, the key pair is considered <em>too permissive</em>, or unsafe, because it is ostensibly readable by other users and then you won't be able to SSH into the EC2 instance as a result. Now you only need to follow the same steps for <a href="#windows">Windows</a>

## Windows

Open the Terminal/Console, navigate to the folder that has your <code>.pem</code> file and then type:

```shell
ssh -i <YOUR_NAME>.pem ec2-user@<public_ip_from_dashboard>
```

You need to replace <code><public_ip_from_dashboard></code>. On your EC2 dashboard, select the instance you have just created.

<img src="https://user-images.githubusercontent.com/114015/224564789-f0f3b12b-2a52-4439-b437-7bfeca32779e.png">

Look for "Public IPv4 address". This is the IP you will need to access your instance.

<img src="https://user-images.githubusercontent.com/114015/224564855-2837c819-4fa1-4cad-82ad-99e996d09cd0.png">

<div className="alert alert-warning">
    Use this IP <strong>only</strong> for SSH.
</div>

Now it is time to access your instance. On the terminal, type again the aforementioned command with the correct IP. For the first question, just type "yes" and then press enter. Your computer will ask this only once.

<img src="https://user-images.githubusercontent.com/114015/224565060-bd94d7d9-c36c-42fc-9096-6c20450242fb.png">

Congratulations! Now you are accessing the instance you have just created! At this point, your terminal is now interacting directly with your EC2 instance (aka your "virtual computer") - <strong>rather than your physical machine</strong>.

<div className="alert alert-warning">
    The next commands will be executed in your instance, so keep the terminal open.
</div>

# Update All Packages

Because you have just created your instance, it is a good practice to upgrade all packages to the newest versions. Thus, type in the terminal to elevate your privileges:

```shell
sudo su
```

and then type:

```shell
yum update -y
```

Note: if you are familiar with using <strong>homebrew</strong> on your Mac, you can think of the way we are using yum here as similar to <strong>brew</strong>.

# Install Node.js

Follow <a href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html" target="_blank"><span>this link</span></a> for more information. In summary, type the following commands in the terminal:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

This will download the installer. Then type the following to install Node.js:

```shell
. ~/.nvm/nvm.sh ; nvm install --lts
```

This command will install the LTS (Long Term Support) version. At the time of this tutorial being written, the LTS version is 20.

# Your First Node.js application on EC2

Now it is time to run your first application on EC2 by using the content from GitHub. If you don't have an account yet, please <a href="https://github.com/signup" target="_blank"><span>create one</span></a>.

Because your instance does not have Git installed, you need to install it:

```shell
yum install git
```

Note: Before installing any new tool/package, please make sure you are "root". If you are not, type <code>sudo su</code> in the terminal/console.

Confirming by typing "y" in the following prompt:

<img src="https://user-images.githubusercontent.com/114015/224567199-68fa3f02-7fd9-4d5c-9386-f6e5fd9a9107.png">

Now type the following command to clone the source on it:

```shell
git clone https://github.com/umf-iti-200/amazon-ec2.git
```

If everything went well, you are supposed to see the folder downloaded on your instance. Just type <code>ls</code>:

<img src="https://user-images.githubusercontent.com/114015/224567311-63f5756f-2eed-46f1-b258-dce61cfce900.png">

Open the folder by typing:

```shell
cd amazon-ec2
```

Now you can install all dependencies

```shell
npm install
```

and, finally, you can run your application in the cloud:

```shell
node server.js
```

<img src="https://user-images.githubusercontent.com/114015/224567576-21e31cd2-c4bc-457d-97a3-79f24d2a65a8.png">

Congratulations! Your app is now running in the cloud! Let's see it in action!

# Visualizing Your Server

Open your EC2 dashboard on your browser. Select the instance you created earlier and search for Public IPv4 DNS (as in the image below). This is the URL the users will access your server (Don't share the IP since it can change constantly).

<img src="https://user-images.githubusercontent.com/114015/224567914-3a952e18-dcc0-49df-8a2e-3cefe1b268cb.png">

Open your browser and type it:

```
http://<SERVER_URL>:3000
```

Note: Don't forget the PORT <code>3000</code> and <code>http://</code>. What happened? Exactly! Nothing. Although your server is running.

<img src="https://user-images.githubusercontent.com/114015/224569241-2926d039-a2c3-4d6d-9433-1004d65e4b63.png">

The problem is that your browser cannot reach your server (virtual computer) because you haven't configured the Security Group to allow inbound rules for HTTP/HTTPS on your instance. By default, only the SSH port was allowed (Port 22).

# Allow Public Access

Go back again to the EC2 dashboard, select your instance and then open the <em>Security tab</em> at the bottom. On <em>Security groups</em>, you will see what is the security group attached to your instance. Click on it.

<img src="https://user-images.githubusercontent.com/114015/224569595-1e13939a-6e09-40cc-95f9-9668f3acc428.png">

Now you have access to set all <em>inbound</em> and <em>outbound</em> rules for this specific security group. Select the <em>Inbound Rules</em> tab and then <em>Edit Inbound rules</em>.

<img src="https://user-images.githubusercontent.com/114015/224569693-adf571bc-ed48-43be-89d1-d3ebfe9d1f7d.png">

Click on Add Rules and then type/select the following settings:

  - **Type:** Custom TCP
  - **Port Range:** 3000
  - **Source:** Anywhere IPv4

Finally, Click on <em>Save rules</em>. You should come up with something similar to the image below:

<img src="https://user-images.githubusercontent.com/114015/224569912-1e6a7300-50f8-4c5c-a144-4745f2a866c9.png">

Go back to your browser and refresh the website. Guess what? Now you should be able to see your server running! If you don't see the page running, change it from "https" to "http".

<img src="https://user-images.githubusercontent.com/114015/224570097-9bdd6898-f751-44d7-8a20-7564006c8ba9.png">

# Clean Up

Navigate to your EC2 dashboard (where you can see the list of all your instances). Select the instance and then click <em>Stop Instance</em>.

<img src="https://user-images.githubusercontent.com/114015/224570572-f7c904b8-f8d9-437d-9d09-a0c27bdb7b1b.png">

<div className="alert alert-danger">
    <i className="bi bi-exclamation-triangle me-2"></i>Don't forget to stop all instances after this lesson.
</div>
