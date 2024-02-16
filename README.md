
## Multi-Channel Notification Delivery System

### Introduction

A Multi-Channel Notification Delivery System serves as a critical infrastructure that enables organizations to send notifications to their audience through various communication channels simultaneously. These channels can include email, SMS, push notifications, social media platforms, and more.

### Functional Requirements

- Clients should be able to send notifications, specifying the message content, recipients, and delivery schedule.
- The system should support sending notifications through various communication channels, including email, SMS, and push notifications.
- The system should support be configurable such that it can integrate any kind of communication channels in future.
- The system should be flexible for onboarding multiple clients.
- Users should have the flexibility to choose the desired communication channel for each notification.
- Users should have the option to personalize notifications based on user preferences.


### Non-Functional Requirements

- The system should be able to handle a large volume of notifications.
- Notifications should be delivered with low latency and high throughput.
- The system should be highly available and reliable.

### DB Design

![Architecture](/assets/images/db_schema.jpg)


### System Architecture

![Architecture](/assets/images/arch.jpg)
