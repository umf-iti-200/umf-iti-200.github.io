---
title: AWS RDS (Relational Database Service)
authorName: Thiago Ferreira
authorId: thiago-ferreira
publishedAt: March 31, 2024 12:00 PM
category: Amazon AWS
tags:
  - aws
  - amazon
  - rds
---

# Before You Begin

This tutorial was created to help you understand the basics of Amazon AWS. It is not intended to help you deploy any real project/product by any means. There are several other factors involved, such as security, when doing it. That said, please do not follow the same steps if you want to deploy a real application. Please talk with a specialist.

If you did not create yet an AWS account, please follow [this tutorial](/posts/create-a-new-aws-account). If you already have an account, just log into Console.

# Create a VPC

Amazon Virtual Private Cloud (VPC) is a service that lets you launch AWS resources in a logically isolated virtual network that you define. On your Console Home, look for <code>Services</code> on the top navbar and then go to <code>Database → VPC</code>.

<img width="500" alt="Screenshot 2023-03-12 at 9 48 04 PM" src="https://user-images.githubusercontent.com/114015/224590065-c127ee93-46e7-4e68-bd8f-e955bc3284e1.png">

On the left sidebar, search for <em>Security Groups</em> and click on it:

<img width="317" alt="Screenshot 2023-03-12 at 9 49 14 PM" src="https://user-images.githubusercontent.com/114015/224590189-99d3b466-f7a5-4db1-b6b6-7b0e5e7bf3b7.png">

On the right side, search for <em>Create security group</em>

<img width="416" alt="Screenshot 2023-03-12 at 9 50 47 PM" src="https://user-images.githubusercontent.com/114015/224590344-2ea4123d-7446-4970-a74f-30794d72fc29.png">

For <em>Security group name</em>, just type a name based on your preferences. For <em>Description</em>, type something related to this security group.

<img width="500" alt="Screenshot 2023-03-12 at 10 07 03 PM" src="https://user-images.githubusercontent.com/114015/224591949-cc736164-9e04-420b-9a8d-492b4cbab427.png">

Then click on <em>Add rule</em> under **Inbound Rules** and add the following rules.

<img width="500" alt="Screenshot 2023-03-12 at 9 53 57 PM" src="https://user-images.githubusercontent.com/114015/224590692-d848c8bf-35fe-44bd-8951-1c16ee5f5f20.png">

In <em>Source</em>, select <code>Anywhere-IPv4</code> for the first and <code>Anywhere-IPv6</code> for the second rule. Finally, click on <em>Create Security Group</em>. We have created this security group because we want to have access to the database using pgAdmin, besides several other reasons. In a production/real environment, you should perform different steps. Now you can create a Postgres database.

# Create an RDS Database

On your Console Home, look for <code>Services</code> on the top navbar and then go to <code>Database → RDS</code>.

<img width="500" alt="Screenshot 2023-03-12 at 9 21 55 PM" src="https://user-images.githubusercontent.com/114015/224587636-2fb3a5af-efba-4c7c-a33a-07c03230f728.png">

Amazon Relational Database Service (Amazon RDS) is a collection of managed services that makes it simple to set up, operate, and scale databases in the cloud. When you access RDS, the image below shows its homepage.

<img width="500" alt="Screenshot 2023-03-12 at 9 24 32 PM" src="https://user-images.githubusercontent.com/114015/224587844-1888ebf3-67c5-47ee-ab8e-b1028a4fc962.png">

As you can see, no database exists.

# Creating the First Database

On the homepage, click on <em>Create database</em>. You are going to pass through several steps until the end. Please pay attention all the details.

<img width="411" alt="Screenshot 2023-03-12 at 9 26 46 PM" src="https://user-images.githubusercontent.com/114015/224588057-02a883a3-7c3c-4506-8c10-45442427b6c0.png">

Initially, you are going to use the <em>Standard create</em> option. You should select this option because you want to be under the free tier.

<img width="500" alt="Screenshot 2023-03-12 at 9 30 08 PM" src="https://user-images.githubusercontent.com/114015/224588306-06486b0a-6a5f-4361-9794-d91fbf34bc58.png">

For the Engine option, you should select <strong>Postgres</strong> and set the engine version as default. The image below shows PostgreSQL Engine Version 14.6-R1. However, you should select the most recent version (or just keep the engine as it is).

<img width="500" alt="Screenshot 2023-03-12 at 9 30 38 PM" src="https://user-images.githubusercontent.com/114015/224588406-e0f1bef9-16cb-464d-8a3b-cac3af8e4b2b.png">

**Heads up!** In this step, you should select *Free tier*.

<img width="739" alt="Screenshot 2023-03-12 at 9 32 26 PM" src="https://user-images.githubusercontent.com/114015/224588504-de093e39-57a5-4908-aac0-91ba802c359d.png">

Now it is time to set the settings of your database.

 - **DB instance identifier**: you may keep it as `database-1`
 - **Master username**: you may keep it as `postgres`
 - **Master password**: you may keep it as `postgres`

For *Credentials management*, keep "Self managed".

<img width="475" src="https://user-images.githubusercontent.com/114015/224588929-a65ca38d-a622-49a7-867b-ee9467921aa5.png">

<div class="alert alert-warning" role="alert">
    In a production/real environment, <strong>NEVER</strong> use this username and password. Pick something hard to guess.
</div>

For <em>Instance configuration</em>, just select the configuration under the free tier, i.e., <code>db.t3.micro</code>.

<img width="500" src="https://user-images.githubusercontent.com/114015/224589457-a2001c83-cccf-464d-9123-266d8fa4ac30.png">

Heads up! <strong>Uncheck</strong> the <em>Enable storage autoscaling</em>.

<img width="500" src="1.png">

<p>In <em>Connectivity</em>, set <code>Yes</code> for <em>Public access</em>.</p>

<img width="439" src="https://user-images.githubusercontent.com/114015/224592189-83ca3884-a9f3-43b0-8b62-9e3774678910.png">

<p>Now select the Security Group you created at the beginning of this tutorial.</p>

<img width="424" src="https://user-images.githubusercontent.com/114015/224592553-0fd06d91-d946-415c-aff0-281258d8acaf.png">

<p>Heads up! <strong>Uncheck</strong> the following option:</p>

<img width="500" src="https://user-images.githubusercontent.com/114015/224592920-4c295353-9415-4d97-8fdb-4df8409a2b5e.png">

Now expand <em>Additional configuration</em> and then set a <em>Initial database name</em>

<img width="500" src="https://user-images.githubusercontent.com/114015/224593057-9c2b3af7-4d2c-4d31-85fc-193b82787f75.png">

And then <strong>uncheck</strong> the following options:

<img width="520" src="https://user-images.githubusercontent.com/114015/224593164-299befd7-fc3b-440f-ab3c-d87282b89c20.png">

and <strong>uncheck</strong> this:

<img width="403"src="https://user-images.githubusercontent.com/114015/224593284-9a0448d6-1c30-491b-b5e3-89a2e1efe30c.png">

Finally, click on <em>Create database</em>. if the following screen pops up for you, just close it.

<img width="500" src="2.png">

This process will take a long time, sometimes, it can take 5 min or more until you have the database ready for use (it will show <code>Available</code> in the <em>Status</em>).

<img width="612"src="https://user-images.githubusercontent.com/114015/224594216-4b9364c4-7b5d-4ed5-a9e3-878bbe23ab5d.png"></p>



<div class="alert alert-warning" role="alert">
    <strong>Caveat</strong>: In this tutorial, I asked you to <strong>uncheck</strong> several options (including security options). This was intentional and only because I want you to be under the free tier and I also want you to have external access to your database. In a real/production environment, the settings will be very different.
</div>

# Connecting to your database

Once you see the status as <code>Available</code>, it is time to access the database by using pgAdmin. Thus, open it on your computer and then go to the left sidebar to register a new server.

<img width="542" alt="Screenshot 2023-03-12 at 10 31 19 PM" src="https://user-images.githubusercontent.com/114015/224595030-ebc562eb-0676-431e-a3aa-724e640e23ca.png">

Type a name for your connection (it could be any name):

<img width="319" alt="Screenshot 2023-03-12 at 10 32 24 PM" src="https://user-images.githubusercontent.com/114015/224595120-8070de18-4999-4875-97ed-26fba844bbc1.png">

Select the <em>Connection</em> tab and the first information needed is the host/IP address.

<img width="456" alt="Screenshot 2023-03-12 at 10 33 15 PM" src="https://user-images.githubusercontent.com/114015/224595212-3a35fe9b-9b25-4579-b6f2-6fef8bd8b1aa.png">

Let's go back to RDS and click on the database that was recently launched.

<img width="287" alt="Screenshot 2023-03-12 at 10 34 07 PM" src="https://user-images.githubusercontent.com/114015/224595299-6a77c66e-429f-469f-846c-228c201dcc7c.png">

Search for <em>Endpoint &amp; Port</em> information in <em>Connectivity &amp; Security</em>.

<img width="299" alt="Screenshot 2023-03-12 at 10 34 55 PM" src="https://user-images.githubusercontent.com/114015/224595403-e1a87939-c256-49ea-b0b2-5747af3cb8ba.png">

This will be your hostname/IP address and the port used. Type it on your pgAdmin, in addition to the password you have created before. Click on "Save".

<img width="395" alt="Screenshot 2023-03-12 at 10 36 34 PM" src="https://user-images.githubusercontent.com/114015/224595549-8b525827-8ab9-4a36-9756-acdfcae0c10b.png">

If everything goes well, you will be able to connect to your newly created database:

<img width="338" height="338" src="3.png">

Congratulations! Now it is time to add tables and some data to be used by your application.

<div class="alert alert-warning" role="alert">
    In a real/production environment, the creation of tables will be an automated script, not a manual process.
</div>

# Creating Tables

To create a table, just right-click on the name of the database in which the table will be stored, and then click on <code>Query Tool</code>

<img width="338" height="338" src="4.png">

Create the following table:

```sql
CREATE TABLE books(
  id      SERIAL PRIMARY KEY,
  title   TEXT NOT NULL,
  author  TEXT NULL
);
```

Just for testing purposes, let's add only the first entry manually. Thus, type the following SQL command:

```sql
INSERT INTO books (title, author) VALUES ('Book A', 'Author A');
```

If you would like to double-check the information, just type the SELECT command to return all rows.

<img width="322" alt="Screenshot 2023-03-12 at 10 49 16 PM" src="https://user-images.githubusercontent.com/114015/224597052-20f3cff4-1fd3-4dca-a7fd-e340822aef02.png">

As you can see, the <code>id</code> column was not provided in the INSERT command. Since this column was created as <code>SERIAL</code> and <code>PRIMARY KEY</code>, Postgres assigns automatically a new ID for each row and avoids any duplicity.

# Connecting the Application

Since we have the database working successfully, let's connect the app to the database. However, you will not do it on your workspace. By following the instructions of the <a href="/posts/aws-ec2">previous tutorial</a> about AWS EC2, create a new virtual computer and then clone the following repo on it:

 - [https://github.com/umf-iti-200/amazon-rds](https://github.com/umf-iti-200/amazon-rds)

After cloning, because this is a Node.js application, don't forget to install all dependencies by typing:

```shell
npm install
```

If you type <code>ls --all</code>, you are going to see a file called <code>.env</code>. This is used for storing information regarding the database connection.

<img width="500" alt="Screenshot 2023-03-12 at 10 58 28 PM" src="https://user-images.githubusercontent.com/114015/224598111-0edcbe08-f0bd-49bf-8491-5f430c9983ee.png">

Because we are using the terminal/console to interact with the virtual computer, there is no graphical-based user interface to edit this file. In this case, let's use a tool named <code>nano</code>. Just type:

```shell
nano .env
```

By using the keyboard, you can navigate through all lines of the document. Thus, type the same information you typed on pgAdmin.

<img width="534" src="https://user-images.githubusercontent.com/114015/224598544-f524c8e3-c432-4b1e-b048-3ed7af88ee9e.png">

To save the file, just press <code>CTRL + O</code> to "Write Out" and then ENTER. In addition to this, press <code>CTRL + X</code> to exit the program. Finally, just start the application by typing:

```shell
node server.js
```

Congratulations! You are now running the app entirely in the cloud.

<img width="534" src="https://user-images.githubusercontent.com/114015/224601011-a4f50872-33ca-4f60-a06b-7f0069a1cb61.png">

# Pricing

If you would like to know more about pricing for PostgreSQL, please access [https://aws.amazon.com/rds/postgresql/pricing/](https://aws.amazon.com/rds/postgresql/pricing/) for details.

# Clean Up

Navigate to your RDS dashboard (where you can see the list of all your databases). Select the database and then click <strong>Delete</strong>.

<img width="500" src="https://user-images.githubusercontent.com/114015/224602176-5ff3cbe0-0141-4abd-afa3-14793af1631b.png">

A confirmation dialog will pop up. Just uncheck "Create final snapshot", check "I acknowledge that upon instance deletion, automated backups, including system snapshots and point-in-time recovery, will no longer be available.", type "delete me", and, finally, click on "Delete".

<img width="388" height="388" src="6.png">

<div class="alert alert-danger" role="alert">
    <i class="bi bi-exclamation-triangle me-2"></i>Don't forget to delete all databases after this tutorial.
</div>
