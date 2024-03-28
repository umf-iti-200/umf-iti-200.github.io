---
title: AWS S3 (Simple Storage Service)
authorName: Thiago Ferreira
authorId: thiago-ferreira
publishedAt: March 23, 2024 5:00 PM
category: Amazon AWS
tags:
  - aws
  - amazon
  - s3
---

# Before You Begin

On your <a href="/posts/what-is-workspace">Workspace</a>, download or clone the following repository:

 - <a href="https://github.com/umf-iti-200/amazon-s3">https://github.com/umf-iti-200/amazon-s3</a>

In addition to this, if you did not create yet an AWS account, please follow <a href="/posts/create-a-new-aws-account">this tutorial</a>. If you already have an account, just sign in to Console.

# Create an S3 Bucket

On your Console Home, look for <code>Services</code> on the top navbar and then go to <code>Storage → S3</code>.

<img src="https://user-images.githubusercontent.com/114015/223164885-d4f80ca2-5c78-4206-81c1-db7466721dfb.png">

Amazon S3 is an <strong>object storage service</strong> that offers industry-leading scalability, data availability, security, and performance. You can store any kind of "object" on it, e.g., videos, photos, .pdf, etc.

AWS organizes the objects into "buckets". It means that you can have, for instance, a bucket only for images, another bucket only for videos, and so on. It will always depend on your or the company's needs. So, Click <em>Create Bucket</em> to create your first bucket.

<img src="https://user-images.githubusercontent.com/114015/223166095-cd388567-ea55-41c3-a8d9-15ce784ba722.png">

In <em>General Configuration</em>, enter a bucket name of your choice, and select the region closest to your location.

<img src="https://user-images.githubusercontent.com/114015/223167435-6ff1f647-cc3b-485c-a630-003950875de9.png">

<div class="alert alert-warning">
    <i class="bi bi-exclamation-circle me-2"></i>The bucket names must be <strong>unique</strong> across all AWS accounts
</div>

In <em>Block Public Access settings for this bucket</em>, Uncheck "Block all public access" and then check "I acknowledge that the current settings might result in this bucket and the objects within becoming public".

<img src="https://user-images.githubusercontent.com/114015/223169286-a216eef6-bb88-4ed9-8f6e-7e0d8921b9fa.png">

Sometimes you would like to create a bucket to save your personal files as a backup. So, as default, AWS blocks all public access. Since we want to share our website with everyone, we need to uncheck this option so they will have access to it. Scroll all the way down and then click on <em>Create Bucket</em>.

<img src="https://user-images.githubusercontent.com/114015/223168266-60177709-6571-4499-89ad-3cabac1da9d0.png">

Congratulations! You have created your first bucket at AWS S3 as you can see in the figure below.

<img src="https://user-images.githubusercontent.com/114015/223182689-fff01800-569f-4e91-a6e5-7eb8a69f4363.png">

The figure shows the S3's dashboard. It means that the next time you access S3, you will see the list of buckets you have created so far.

# Configure the Bucket to Host a Static Website

In the S3's dashboard, click the name of the bucket you just created.

<img src="https://user-images.githubusercontent.com/114015/223186125-e18d04d1-e321-432d-81d5-6282a2f7cb77.png">

As you can see from the figure, because we just created the bucket, it has no objects (or files). Since we want to deploy a static website, we are going to use this bucket to store all files. However, before adding all files, let's tell S3 that this bucket will be used to host a static website. Click the Properties tab:

<img src="https://user-images.githubusercontent.com/114015/223186723-1485b49e-e7d7-423c-9f95-e0df8ad9fac8.png" style="width: 250px;">

In this tab, scroll all the way down until you find <em>Static website hosting</em> section. As you can see, it is set as <code>Disabled</code> as default. Click on <em>Edit</em> button.

<img src="https://user-images.githubusercontent.com/114015/223187175-6238a382-0ad0-4af4-9d76-c2b8cb90d2f1.png">

In this next screen, you will enable the Static website hosting. Once you enable it, more configurations will show up.

<img src="https://user-images.githubusercontent.com/114015/223197816-7b5be75f-4934-4ddc-8262-adfb9efe0eb2.png">

Now, in <em>Index document</em>, type <code>index.html</code>. This is the file that will be served as default to the user when he/she accesses the website.

<img src="https://user-images.githubusercontent.com/114015/223205661-a830a0df-21e2-4a74-b715-666b29c4413c.png">

The last option is called <em>Error Document</em>. This is the file that will be served in case the user is trying to access/open a file that does not exist on your bucket. Just type <code>error.html</code>.

Click on <em>Save Changes</em>. The page will move you back to the <em>Properties</em> tab. Now scroll all the way down again and then you will see in <em>Bucket website endpoint</em> the URL you need to use to access your website.

<img src="https://user-images.githubusercontent.com/114015/223205947-8573ba7f-08fd-4595-9446-863fbf21e701.png">

Since you have not uploaded any file yet, if you access the URL nothing will show up.

# Upload files to the S3 Bucket

Now it is time to upload all files from the project you have just downloaded/cloned. Go back to the <em>Objects</em> tab and then click on <em>Upload</em>.

<img src="https://user-images.githubusercontent.com/114015/223200768-9f7660ee-4621-45f0-833e-e348e606feef.png" style="width: 250px;">

Click on <em>Add Files</em> and select all files you have cloned, **except** the folder called <code>images</code>. You will upload it later in this lesson.

<img src="https://user-images.githubusercontent.com/114015/223201311-050ef529-39a1-483e-8625-a98f48a5ddc4.png">

Scroll all the way down and then click on <em>Upload</em>. You will see an Upload Status website. if everything goes well, just click on <em>Close</em>.

<img src="https://user-images.githubusercontent.com/114015/223201578-9ec1b8a5-96a3-40e2-aa67-18bdfadd2eac.png" style="width: 300px;">

The page will move you back to your bucket and then you will see the files listed.

<img src="https://user-images.githubusercontent.com/114015/223201919-12d28cbd-b6eb-42e9-b062-ad349bb18245.png" style="width: 250px;">

# Visit Your Website

Since you have uploaded all the files, it is time to access the URL provided earlier. For this lesson, this is the URL:

<img src="https://user-images.githubusercontent.com/114015/223207259-ba0b57a7-35b4-4edd-a787-776c58748060.png">

In your case, depending on the bucket name, it could be a different URL. When you access the URL, you will see <code>403 Forbidden</code>.

<img src="https://user-images.githubusercontent.com/114015/223207615-66c66eb5-5ee0-4691-acf4-5aed8dae62c4.png">

Even though you had public access when you created the bucket, you still need to set the permissions for its objects (in your case, the files you have just created and other files from your website). You can either set permission for each file or the entire bucket. We are going to set permission for the entire bucket. S3 calls the permission as "Bucket policies".

# Add a Bucket Policy

To make objects in your bucket publicly readable (when the user accesses your website, they will "read" the files you have added), you must write a bucket policy that grants everyone <code>s3:GetObject</code> permission. When you grant public read access, anyone on the internet can access your bucket. On your bucket, select the <em>Permissions</em> tab.

<img src="https://user-images.githubusercontent.com/114015/223209381-af2b2c1f-474a-4f43-86ef-9ed073fdbda1.png" style="width: 300px;" >

In <em>Bucket Policy</em>, click on <em>Edit</em>.

<img src="https://user-images.githubusercontent.com/114015/223208885-492c7976-8b5b-4c3d-a6d8-bacf33ae379b.png" >

To grant public read access to your website, copy the following bucket policy, and paste it in the <em>Bucket policy editor</em>.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::<YOUR-BUCKET-NAME>/*"
            ]
        }
    ]
  }
```

Update <code><YOUR-BUCKET-NAME></code> to match your bucket name. Click <em>Save Changes</em> at the bottom.

Finally, open the URL again.

<img src="https://user-images.githubusercontent.com/114015/223291390-35f36270-cd1b-441d-9454-9b7a10093980.png">

Congratulations! This is your first static website at Amazon AWS.

# Adding Folders

Since you know how to upload files, it is time to upload a folder containing several other files.

Select the <em>Object</em> tab on your bucket and then click on <em>Upload</em>. Then click on <em>Add folder</em>.

<img src="https://user-images.githubusercontent.com/114015/223294026-48902b9c-ed79-43f2-8223-26dfd4d8c94e.png">

A dialog window will pop up. Select the folder called "images" in the project you have just cloned.

<img src="https://user-images.githubusercontent.com/114015/223294590-d0e10831-abc2-4ffa-9daa-550da60ba8de.png">

Press <em>Upload</em> at the bottom. If everything went well press <em>Done</em>. This is now your bucket:

<img src="https://user-images.githubusercontent.com/114015/223295216-144a9e1b-a84f-4b60-854f-c3ae7bfee3bb.png">

To access the files inside of the folder, just type on your browser:

```
http://<YOUR_URL>/images/cat.jpg
```

You will see the following image:

<img src="https://user-images.githubusercontent.com/114015/223295447-759d7768-b159-47d4-bb06-a0e4c0d83c26.png">

# Error Page

Do you remember when you added an <code>error.html</code> file while setting up the bucket? Look what happens if you try to access an invalid URL for instance

```
http://<YOUR_URL>/welcome.html
```

<img src="https://user-images.githubusercontent.com/114015/223291715-119bb01b-313a-4d89-9f98-2d92da8d62a2.png">

Of course, <code>welcome.html</code> does not exist on your bucket. This is why AWS is displaying the error page.

# Princing

If you would like to know more about pricing, please access [https://aws.amazon.com/s3/pricing](https://aws.amazon.com/s3/pricing) for details.

# Clean Up

Navigate to your S3 dashboard (where you can see the list of all of your buckets). Click the bucket symbol next to your bucket name. Then click Empty.

<img src="https://user-images.githubusercontent.com/114015/223296287-59dbd790-df03-4557-8a50-8dcfb0f57103.png">

Type "permanently delete" and confirm by clicking on <em>Empty</em>. If successful, click on <em>Exit</em>.

Finally, select again the bucket row and click on <em>Delete</em>. Type the name of the bucket, and click Confirm.

<div class="alert alert-danger">
    <i class="bi bi-exclamation-triangle me-2"></i>Don't forget to delete all buckets after this lesson.
</div>
