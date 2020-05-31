> CRMD (Consumer Relevant Merchant Database)
    
Duration/Team Size | 5 members
---|------|
O/S | Linux/Ubuntu
Environment| Hadoop, Hive, SAS, Shell Script
Client|Amex
ML Algorithm| Text Mining (cleaning, stemming, N-grammizer); K-NN; Clustering


##### Description:
   Consumer Relevant Merchant Database (CRMD) project is intends to associate the Non-US merchants with specific industries so that Card Members are appropriately rewarded. The processes of identifying correct industry through many components are as Data pull, Auth MCC, Text Mining, K-NN and lastly arbitration process. Text mining includes data preparation and data matching. For data matching it uses N-Grammizer (till tri-gram) to group the industries name and prepare the scores from it (ranking). Then K-NN is for grouping or clustering of nearest neighbors based on the data set. It creates the group for four industries codes and compute the score for the same. Lastly arbitration runs on these different outputs and merge them to compute the relevant scores for each industry codes for specific (10) merchants.


> SERT (Spend Engagement and Relevance Tool)

Duration/Team Size | 4 members
---|------|
O/S | Linux/Ubuntu
Environment| MapR, PIG, HDFS, Elastic Search, Shell Script
Client|Amex
ML Algorithm| Text mining, TF-IDF, Term query, Indexing

##### Description:
   Spend Engagement and Relevance Tool (SERT) provides Amex open card customers with merchant recommendations. Amex salespersons would visit Amex open card
customers and using their customer details and relevant industries would provide them with competitor details based on criteria like distance, revenue band and industry. Finally a list of merchant recommendations would be provided where the open card customer could buy from to improve their profit margins.


> LendingAwareness

Duration/Team Size | 4 members
---|------|
O/S | Linux/Ubuntu
RDBMD | MySQL 5
Environment| Hadoop, HBase, HDFS, Shell Script
Client|Amex

##### Description:
   LendingAwareness is a hadoop based project which create extracts the data from Hbase and generates stats from output file. Extraction Data Loader module is responsible for Bulk insertion of raw data (MainFrame Files) into HBase. It also includes the data with respect to its data types, so that comparison of data will much simpler. Extraction Front UI is responsible to submit the job with selected columns and specific table into MySQL, which will be taken by Extraction Backend through Job Listener. Emails are being sent for success-or-failure execution of this process. Basic information will be attached with this mail of process.


> Sentimental Analysis

Duration/Team Size | 2 members
---|------|
O/S | Linux/Ubuntu
Environment| Hadoop, HDFS, ShellScript
Client|Amex
ML Algorithm| Naïve Bayes’, Classification, POSTagger (Stanford NLP), Cleaning (stop words, stemming, TF-IDF, pre-processing)

##### Description:
   This POC is to create a Sentimental Analysis on Yelp data (Restaurant data-set) across Domain. I’ve used Mahout core libraries to generate the confusion matrix for Good/Bad data set. Tweaking of algorithm by looking into the confusion matrix result set by applying Naïve Bayes and Uni-Gram, Bi-Gram and even n-gram to determine the sentiments. After all this rigorous analysis of data to fit the model after that I moved to exploration of probabilistic parsing and tagging of each sentence using NLP (Stanford).

> Other Projects

- **Score** - Creation of HIVE query on the fly and executes as batch processing and lastly send the mail for stats.
- **Cornerstone** - Batch processing extraction utility for a given feeds (table or data) w.r.t columns provided.
- **Clickstream** - Decoding and Encoding of dispute and detailed links provided by user- clicks. Analysis of these records in HIVE to server customer/user better experience.
- **CustomeList POC** - Extracting feed details from HBase with web-service exposed for real time analytics.





##### Roles & Responsibilities:
- Study and requirement analysis
- Designing the process flow.
- Work with client analysts to assess and balance workload and ensure timely delivery of analytic results
- Leads development of analytical models using statistical, machine learning and data mining models. Defines model development tactics.
- Work with senior management / Director(s) across product, client, and IT divisions, taking a large role in driving that agenda with business units.
- Provide expertise on mathematical concepts and inspire the adoption of advanced analytics and data science across the breath of the organization.
- Analysis of SAS script and converting it into HIVE to run on Hadoop framework.
- Optimization of HIVE queries
- Analysis on result for better computation and optimization.
- Closely interacting with client to understand the business needs and proposing
effective and optimized solution.
- Automate processes by running on weekly, monthly and daily as per the requirement
specs.
- Involvement in segregation of business logic between web-service and mapr-jobs to
maintain SLA.
- Optimization of Elastic queries by introducing boosting and term filter query.
- Providing real time data-analysis by in cooperating hadoop-jobs and web-service API
calls.
- Extensive Analysis of result-set data to get POS/NEG sentiments.