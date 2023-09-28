import { Construct } from 'constructs';
import { App, TerraformStack, TerraformOutput } from 'cdktf';
import { Instance, Lb, LbListener, LbListenerRule, LbTargetGroup, SecurityGroup, EbsVolume, VolumeAttachment, NetworkInterface, NetworkInterfaceAttachment, KeyPair, Eip, EipAssociation, Route53Zone, Route53Record, IamUser, IamServiceLinkedRole, IamAccessKey, AwsProvider } from './.gen/providers/aws';

class MyStack extends TerraformStack {
    constructor(scope: Construct, name: string) {
        super(scope, name);

        new AwsProvider(this, 'aws', {
            region: 'ap-northeast-2'
        });

        const ec2instance = new Instance(this, 'EC2Instance', {
            ami: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.small",
            keyName: "global-instance",
            availabilityZone: "ap-northeast-2a",
            tenancy: "default",
            subnetId: "subnet-0d1bec8ee5e597576",
            ebsOptimized: false,
            vpcSecurityGroupIds: [
                ec2securitygroup9.id
            ],
            sourceDestCheck: true,
            rootBlockDevice: [{
                volumeSize: 30,
                volumeType: "gp2",
                deleteOnTermination: true
            }],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [{

            }]
        });

        const ec2instance2 = new Instance(this, 'EC2Instance2', {
            ami: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "fe-admin",
            availabilityZone: "ap-northeast-2c",
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            vpcSecurityGroupIds: [
                ec2securitygroup9.id
            ],
            sourceDestCheck: true,
            rootBlockDevice: [{
                volumeSize: 30,
                volumeType: "gp2",
                deleteOnTermination: true
            }],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [{

            }]
        });

        const ec2instance3 = new Instance(this, 'EC2Instance3', {
            ami: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "global-instance",
            availabilityZone: "ap-northeast-2c",
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            vpcSecurityGroupIds: [
                ec2securitygroup9.id
            ],
            sourceDestCheck: true,
            rootBlockDevice: [{
                volumeSize: 30,
                volumeType: "gp2",
                deleteOnTermination: true
            }],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [{

            }]
        });

        const ec2instance4 = new Instance(this, 'EC2Instance4', {
            ami: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "global-instance",
            availabilityZone: "ap-northeast-2c",
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            vpcSecurityGroupIds: [
                ec2securitygroup9.id
            ],
            sourceDestCheck: true,
            rootBlockDevice: [{
                volumeSize: 30,
                volumeType: "gp2",
                deleteOnTermination: true
            }],
            tags: [{

            }]
        });

        const ec2instance5 = new Instance(this, 'EC2Instance5', {
            ami: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "global-instance",
            availabilityZone: "ap-northeast-2c",
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            vpcSecurityGroupIds: [
                ec2securitygroup9.id
            ],
            sourceDestCheck: true,
            rootBlockDevice: [{
                volumeSize: 30,
                volumeType: "gp2",
                deleteOnTermination: true
            }],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [{

            }]
        });

        const ec2instance6 = new Instance(this, 'EC2Instance6', {
            ami: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "global-instance",
            availabilityZone: "ap-northeast-2c",
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            vpcSecurityGroupIds: [
                ec2securitygroup9.id
            ],
            sourceDestCheck: true,
            rootBlockDevice: [{
                volumeSize: 30,
                volumeType: "gp2",
                deleteOnTermination: true
            }],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [{

            }]
        });

        const ec2instance7 = new Instance(this, 'EC2Instance7', {
            ami: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.small",
            keyName: "global-instance",
            availabilityZone: "ap-northeast-2c",
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            vpcSecurityGroupIds: [
                ec2securitygroup9.id
            ],
            sourceDestCheck: true,
            rootBlockDevice: [{
                volumeSize: 30,
                volumeType: "gp2",
                deleteOnTermination: true
            }],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [{

            }]
        });

        const ec2instance8 = new Instance(this, 'EC2Instance8', {
            ami: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "global-instance",
            availabilityZone: "ap-northeast-2c",
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            vpcSecurityGroupIds: [
                ec2securitygroup10.id
            ],
            sourceDestCheck: true,
            rootBlockDevice: [{
                volumeSize: 8,
                volumeType: "gp2",
                deleteOnTermination: true
            }],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [{

            }]
        });

        const ec2instance9 = new Instance(this, 'EC2Instance9', {
            ami: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "global-instance",
            availabilityZone: "ap-northeast-2c",
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            vpcSecurityGroupIds: [
                ec2securitygroup9.id
            ],
            sourceDestCheck: true,
            rootBlockDevice: [{
                volumeSize: 30,
                volumeType: "gp2",
                deleteOnTermination: true
            }],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [{

            }]
        });

        const ec2instance10 = new Instance(this, 'EC2Instance10', {
            ami: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "global-instance",
            availabilityZone: "ap-northeast-2c",
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            vpcSecurityGroupIds: [
                ec2securitygroup9.id
            ],
            sourceDestCheck: true,
            rootBlockDevice: [{
                volumeSize: 30,
                volumeType: "gp2",
                deleteOnTermination: true
            }],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [{

            }]
        });

        const elasticloadbalancingv2loadbalancer = new Lb(this, 'ElasticLoadBalancingV2LoadBalancer', {
            name: "Liberty52-LB",
            internal: false,
            loadBalancerType: "application",
            subnets: [
                "subnet-02174c2714aedd080",
                "subnet-0d1bec8ee5e597576"
            ],
            securityGroups: [
                ec2securitygroup11.id
            ],
            ipAddressType: "ipv4",
            accessLogs: [{
                enabled: false,
                bucket: "",
                prefix: ""
            }],
            idleTimeout: "60",
            enableDeletionProtection: "false",
            enableHttp2: "true",
            enableCrossZoneLoadBalancing: "true"
        });

        const elasticloadbalancingv2listener = new LbListener(this, 'ElasticLoadBalancingV2Listener', {
            loadBalancerArn: "arn:aws:elasticloadbalancing:ap-northeast-2:059971508604:loadbalancer/app/Liberty52-LB/091c9dc7b00ccec2",
            port: 443,
            protocol: "HTTPS",
            sslPolicy: "ELBSecurityPolicy-TLS13-1-2-2021-06",
            certificateArn: "arn:aws:acm:ap-northeast-2:059971508604:certificate/6283f2b6-2762-40e2-89b6-98d60c6fac0e",
            defaultAction: [
                [{
                    targetGroupArn: "arn:aws:elasticloadbalancing:ap-northeast-2:059971508604:targetgroup/http-group/0cc344aeb26840c9",
                    type: "forward"
                }]
            ]
        });

        const elasticloadbalancingv2listener2 = new LbListener(this, 'ElasticLoadBalancingV2Listener2', {
            loadBalancerArn: "arn:aws:elasticloadbalancing:ap-northeast-2:059971508604:loadbalancer/app/Liberty52-LB/091c9dc7b00ccec2",
            port: 444,
            protocol: "HTTPS",
            sslPolicy: "ELBSecurityPolicy-TLS13-1-2-2021-06",
            certificateArn: "arn:aws:acm:ap-northeast-2:059971508604:certificate/6283f2b6-2762-40e2-89b6-98d60c6fac0e",
            defaultAction: [
                [{
                    targetGroupArn: "arn:aws:elasticloadbalancing:ap-northeast-2:059971508604:targetgroup/8080group/f37eeabddb0e0df6",
                    type: "forward"
                }]
            ]
        });

        const elasticloadbalancingv2listener3 = new LbListener(this, 'ElasticLoadBalancingV2Listener3', {
            loadBalancerArn: "arn:aws:elasticloadbalancing:ap-northeast-2:059971508604:loadbalancer/app/Liberty52-LB/091c9dc7b00ccec2",
            port: 80,
            protocol: "HTTP",
            defaultAction: [
                [{
                    redirect: [{
                        host: "#{host}",
                        path: "/#{path}",
                        port: "443",
                        protocol: "HTTPS",
                        query: "#{query}",
                        statusCode: "HTTP_301"
                    }],
                    type: "redirect"
                }]
            ]
        });

        const elasticloadbalancingv2listenerrule = new LbListenerRule(this, 'ElasticLoadBalancingV2ListenerRule', {
            priority: "1",
            listenerArn: "arn:aws:elasticloadbalancing:ap-northeast-2:059971508604:listener/app/Liberty52-LB/091c9dc7b00ccec2/4b441eec0e161ca1",
            condition: [
                [{
                    field: "host-header",
                    values: [
                        "admin.liberty52.com"
                    ]
                }]
            ]
        });

        const elasticloadbalancingv2targetgroup = new LbTargetGroup(this, 'ElasticLoadBalancingV2TargetGroup', {
            healthCheck: [{
                interval: 30,
                path: "/actuator/health",
                port: "traffic-port",
                protocol: "HTTP",
                timeout: 5,
                unhealthyThreshold: 2,
                healthyThreshold: 5,
                matcher: "200"
            }],
            port: 8080,
            protocol: "HTTP",
            targetType: "instance",
            vpcId: "vpc-0ea0500e1dda4d85b",
            name: "8080group"
        });

        const elasticloadbalancingv2targetgroup2 = new LbTargetGroup(this, 'ElasticLoadBalancingV2TargetGroup2', {
            healthCheck: [{
                interval: 30,
                path: "/",
                port: "traffic-port",
                protocol: "HTTPS",
                timeout: 5,
                unhealthyThreshold: 2,
                healthyThreshold: 5,
                matcher: "200"
            }],
            port: 443,
            protocol: "HTTPS",
            targetType: "instance",
            vpcId: "vpc-0ea0500e1dda4d85b",
            name: "https-group"
        });

        const elasticloadbalancingv2targetgroup3 = new LbTargetGroup(this, 'ElasticLoadBalancingV2TargetGroup3', {
            healthCheck: [{
                interval: 30,
                path: "/",
                port: "traffic-port",
                protocol: "HTTP",
                timeout: 5,
                unhealthyThreshold: 2,
                healthyThreshold: 5,
                matcher: "200"
            }],
            port: 80,
            protocol: "HTTP",
            targetType: "instance",
            vpcId: "vpc-0ea0500e1dda4d85b",
            name: "http-group"
        });

        const elasticloadbalancingv2targetgroup4 = new LbTargetGroup(this, 'ElasticLoadBalancingV2TargetGroup4', {
            healthCheck: [{
                interval: 30,
                path: "/",
                port: "traffic-port",
                protocol: "HTTP",
                timeout: 5,
                unhealthyThreshold: 2,
                healthyThreshold: 5,
                matcher: "200"
            }],
            port: 80,
            protocol: "HTTP",
            targetType: "instance",
            vpcId: "vpc-0ea0500e1dda4d85b",
            name: "admin-page"
        });

        const ec2securitygroup = new SecurityGroup(this, 'EC2SecurityGroup', {
            description: "launch-wizard-5 created 2023-09-14T00:15:29.237Z",
            name: "launch-wizard-5",
            tags: [{

            }],
            vpcId: "vpc-0ea0500e1dda4d85b",
            ingress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 80,
                    protocol: "tcp",
                    toPort: 80
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 22,
                    protocol: "tcp",
                    toPort: 22
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 443,
                    protocol: "tcp",
                    toPort: 443
                }]
            ],
            egress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 0,
                    protocol: "-1",
                    toPort: 0
                }]
            ]
        });

        const ec2securitygroup2 = new SecurityGroup(this, 'EC2SecurityGroup2', {
            description: "launch-wizard-1 created 2023-03-31T09:30:50.522Z",
            name: "launch-wizard-1",
            tags: [{

            }],
            vpcId: "vpc-0ea0500e1dda4d85b",
            ingress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 8080,
                    protocol: "tcp",
                    toPort: 8080
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 8761,
                    protocol: "tcp",
                    toPort: 8761
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 22,
                    protocol: "tcp",
                    toPort: 22
                }]
            ],
            egress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 0,
                    protocol: "-1",
                    toPort: 0
                }]
            ]
        });

        const ec2securitygroup3 = new SecurityGroup(this, 'EC2SecurityGroup3', {
            description: "launch-wizard-2 created 2023-03-31T10:28:16.880Z",
            name: "launch-wizard-2",
            tags: [{

            }],
            vpcId: "vpc-0ea0500e1dda4d85b",
            ingress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 8888,
                    protocol: "tcp",
                    toPort: 8888
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 22,
                    protocol: "tcp",
                    toPort: 22
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    description: "zookeeper",
                    fromPort: 2181,
                    protocol: "tcp",
                    toPort: 2181
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    description: "kafka",
                    fromPort: 9092,
                    protocol: "tcp",
                    toPort: 9092
                }]
            ],
            egress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 0,
                    protocol: "-1",
                    toPort: 0
                }]
            ]
        });

        const ec2securitygroup4 = new SecurityGroup(this, 'EC2SecurityGroup4', {
            description: "launch-wizard-3 created 2023-09-13T13:04:35.131Z",
            name: "launch-wizard-3",
            tags: [{

            }],
            vpcId: "vpc-0ea0500e1dda4d85b",
            ingress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 80,
                    protocol: "tcp",
                    toPort: 80
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 22,
                    protocol: "tcp",
                    toPort: 22
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 443,
                    protocol: "tcp",
                    toPort: 443
                }]
            ],
            egress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 0,
                    protocol: "-1",
                    toPort: 0
                }]
            ]
        });

        const ec2securitygroup5 = new SecurityGroup(this, 'EC2SecurityGroup5', {
            description: "This security group was generated by AWS Marketplace and is based on recommended settings for CentOS 7 (x86_64) - with Updates HVM version CentOS-7.2009-20220825.1 provided by Amazon Web Services",
            name: "CentOS 7 (x86_64) - with Updates HVM-CentOS-7.2009-20220825.1-AutogenByAWSMP--1",
            tags: [{

            }],
            vpcId: "vpc-0ea0500e1dda4d85b",
            ingress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 80,
                    protocol: "tcp",
                    toPort: 80
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 8080,
                    protocol: "tcp",
                    toPort: 8080
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    description: "eureka-port",
                    fromPort: 8761,
                    protocol: "tcp",
                    toPort: 8761
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 22,
                    protocol: "tcp",
                    toPort: 22
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 443,
                    protocol: "tcp",
                    toPort: 443
                }]
            ],
            egress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 0,
                    protocol: "-1",
                    toPort: 0
                }]
            ]
        });

        const ec2securitygroup6 = new SecurityGroup(this, 'EC2SecurityGroup6', {
            description: "launch-wizard-6 created 2023-09-14T00:18:04.440Z",
            name: "launch-wizard-6",
            tags: [{

            }],
            vpcId: "vpc-0ea0500e1dda4d85b",
            ingress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 80,
                    protocol: "tcp",
                    toPort: 80
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 22,
                    protocol: "tcp",
                    toPort: 22
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 443,
                    protocol: "tcp",
                    toPort: 443
                }]
            ],
            egress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 0,
                    protocol: "-1",
                    toPort: 0
                }]
            ]
        });

        const ec2securitygroup7 = new SecurityGroup(this, 'EC2SecurityGroup7', {
            description: "launch-wizard-4 created 2023-09-14T00:06:56.497Z",
            name: "launch-wizard-4",
            tags: [{

            }],
            vpcId: "vpc-0ea0500e1dda4d85b",
            ingress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 80,
                    protocol: "tcp",
                    toPort: 80
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 22,
                    protocol: "tcp",
                    toPort: 22
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 443,
                    protocol: "tcp",
                    toPort: 443
                }]
            ],
            egress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 0,
                    protocol: "-1",
                    toPort: 0
                }]
            ]
        });

        const ec2securitygroup8 = new SecurityGroup(this, 'EC2SecurityGroup8', {
            description: "8080 Port Open Groups for Service Instances",
            name: "prod-service-group",
            tags: [{

            }],
            vpcId: "vpc-0ea0500e1dda4d85b",
            ingress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 8080,
                    protocol: "tcp",
                    toPort: 8080
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 22,
                    protocol: "tcp",
                    toPort: 22
                }]
            ],
            egress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 0,
                    protocol: "-1",
                    toPort: 0
                }]
            ]
        });

        const ec2securitygroup9 = new SecurityGroup(this, 'EC2SecurityGroup9', {
            description: "all",
            name: "all",
            tags: [{

            }],
            vpcId: "vpc-0ea0500e1dda4d85b",
            ingress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 0,
                    protocol: "-1",
                    toPort: 0
                }]
            ],
            egress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 0,
                    protocol: "-1",
                    toPort: 0
                }]
            ]
        });

        const ec2securitygroup10 = new SecurityGroup(this, 'EC2SecurityGroup10', {
            description: "FE Server for Development",
            name: "FE-DEV",
            tags: [{

            }],
            vpcId: "vpc-0ea0500e1dda4d85b",
            ingress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 80,
                    protocol: "tcp",
                    toPort: 80
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 22,
                    protocol: "tcp",
                    toPort: 22
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 3000,
                    protocol: "tcp",
                    toPort: 3000
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 443,
                    protocol: "tcp",
                    toPort: 443
                }],
                [{
                    ipv6CidrBlocks: [
                        "::/0"
                    ],
                    fromPort: 443,
                    protocol: "tcp",
                    toPort: 443
                }]
            ],
            egress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 0,
                    protocol: "-1",
                    toPort: 0
                }]
            ]
        });

        const ec2securitygroup11 = new SecurityGroup(this, 'EC2SecurityGroup11', {
            description: "Secret-group fro ELB",
            name: "LoadBalancer",
            tags: [{

            }],
            vpcId: "vpc-0ea0500e1dda4d85b",
            ingress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 81,
                    protocol: "tcp",
                    toPort: 81
                }],
                [{
                    ipv6CidrBlocks: [
                        "::/0"
                    ],
                    fromPort: 81,
                    protocol: "tcp",
                    toPort: 81
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 80,
                    protocol: "tcp",
                    toPort: 80
                }],
                [{
                    ipv6CidrBlocks: [
                        "::/0"
                    ],
                    fromPort: 80,
                    protocol: "tcp",
                    toPort: 80
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 444,
                    protocol: "tcp",
                    toPort: 444
                }],
                [{
                    ipv6CidrBlocks: [
                        "::/0"
                    ],
                    fromPort: 444,
                    protocol: "tcp",
                    toPort: 444
                }],
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 443,
                    protocol: "tcp",
                    toPort: 443
                }],
                [{
                    ipv6CidrBlocks: [
                        "::/0"
                    ],
                    fromPort: 443,
                    protocol: "tcp",
                    toPort: 443
                }]
            ],
            egress: [
                [{
                    cidrBlocks: [
                        "0.0.0.0/0"
                    ],
                    fromPort: 0,
                    protocol: "-1",
                    toPort: 0
                }]
            ]
        });

        const ec2volume = new EbsVolume(this, 'EC2Volume', {
            availabilityZone: "ap-northeast-2c",
            encrypted: false,
            size: 30,
            type: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            tags: [{

            }]
        });

        const ec2volume2 = new EbsVolume(this, 'EC2Volume2', {
            availabilityZone: "ap-northeast-2c",
            encrypted: false,
            size: 30,
            type: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            tags: [{

            }]
        });

        const ec2volume3 = new EbsVolume(this, 'EC2Volume3', {
            availabilityZone: "ap-northeast-2c",
            encrypted: false,
            size: 30,
            type: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            tags: [{

            }]
        });

        const ec2volume4 = new EbsVolume(this, 'EC2Volume4', {
            availabilityZone: "ap-northeast-2c",
            encrypted: false,
            size: 30,
            type: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            tags: [{

            }]
        });

        const ec2volume5 = new EbsVolume(this, 'EC2Volume5', {
            availabilityZone: "ap-northeast-2c",
            encrypted: false,
            size: 30,
            type: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            tags: [{

            }]
        });

        const ec2volume6 = new EbsVolume(this, 'EC2Volume6', {
            availabilityZone: "ap-northeast-2c",
            encrypted: false,
            size: 8,
            type: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            tags: [{

            }]
        });

        const ec2volume7 = new EbsVolume(this, 'EC2Volume7', {
            availabilityZone: "ap-northeast-2c",
            encrypted: false,
            size: 30,
            type: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            tags: [{

            }]
        });

        const ec2volume8 = new EbsVolume(this, 'EC2Volume8', {
            availabilityZone: "ap-northeast-2c",
            encrypted: false,
            size: 30,
            type: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            tags: [{

            }]
        });

        const ec2volume9 = new EbsVolume(this, 'EC2Volume9', {
            availabilityZone: "ap-northeast-2c",
            encrypted: false,
            size: 30,
            type: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            tags: [{

            }]
        });

        const ec2volume10 = new EbsVolume(this, 'EC2Volume10', {
            availabilityZone: "ap-northeast-2a",
            encrypted: false,
            size: 30,
            type: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            tags: [{

            }]
        });

        const ec2volumeattachment = new VolumeAttachment(this, 'EC2VolumeAttachment', {
            volumeId: "vol-0cae6ec20a62cffe9",
            instanceId: "i-04f95f15cfe3c97ef",
            deviceName: "/dev/sda1"
        });

        const ec2volumeattachment2 = new VolumeAttachment(this, 'EC2VolumeAttachment2', {
            volumeId: "vol-0d348218a6102b3cb",
            instanceId: "i-0d6033278f154986e",
            deviceName: "/dev/sda1"
        });

        const ec2volumeattachment3 = new VolumeAttachment(this, 'EC2VolumeAttachment3', {
            volumeId: "vol-02fe94bdb3cbcf8a0",
            instanceId: "i-0ef98136276454c8f",
            deviceName: "/dev/sda1"
        });

        const ec2volumeattachment4 = new VolumeAttachment(this, 'EC2VolumeAttachment4', {
            volumeId: "vol-07eaf4379a41302be",
            instanceId: "i-03be054e44220d3d6",
            deviceName: "/dev/sda1"
        });

        const ec2volumeattachment5 = new VolumeAttachment(this, 'EC2VolumeAttachment5', {
            volumeId: "vol-0391c35e4be9ba386",
            instanceId: "i-0fff883371decc540",
            deviceName: "/dev/sda1"
        });

        const ec2volumeattachment6 = new VolumeAttachment(this, 'EC2VolumeAttachment6', {
            volumeId: "vol-0bbd949bcda6f2427",
            instanceId: "i-0436f375783aee1ac",
            deviceName: "/dev/sda1"
        });

        const ec2volumeattachment7 = new VolumeAttachment(this, 'EC2VolumeAttachment7', {
            volumeId: "vol-07db603fa74f0e177",
            instanceId: "i-0581e8e62acab00b8",
            deviceName: "/dev/sda1"
        });

        const ec2volumeattachment8 = new VolumeAttachment(this, 'EC2VolumeAttachment8', {
            volumeId: "vol-064f451b7e0eecad8",
            instanceId: "i-0296978017a580f9d",
            deviceName: "/dev/sda1"
        });

        const ec2volumeattachment9 = new VolumeAttachment(this, 'EC2VolumeAttachment9', {
            volumeId: "vol-0e0b9736a09a48cff",
            instanceId: "i-048ef1defd96e273b",
            deviceName: "/dev/sda1"
        });

        const ec2volumeattachment10 = new VolumeAttachment(this, 'EC2VolumeAttachment10', {
            volumeId: "vol-07f88caf7a3601ebd",
            instanceId: "i-0bd29da8bb4856c10",
            deviceName: "/dev/sda1"
        });

        const ec2networkinterface = new NetworkInterface(this, 'EC2NetworkInterface', {
            description: "",
            privateIps: [
                "172.31.36.123"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup9.id
            ]
        });

        const ec2networkinterface2 = new NetworkInterface(this, 'EC2NetworkInterface2', {
            description: "",
            privateIps: [
                "172.31.47.161"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup8.id
            ]
        });

        const ec2networkinterface3 = new NetworkInterface(this, 'EC2NetworkInterface3', {
            description: "ELB app/Liberty52-LB/091c9dc7b00ccec2",
            privateIps: [
                "172.31.8.234"
            ],
            subnetId: "subnet-0d1bec8ee5e597576",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup11.id
            ]
        });

        const ec2networkinterface4 = new NetworkInterface(this, 'EC2NetworkInterface4', {
            description: "",
            privateIps: [
                "172.31.36.242"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup9.id
            ]
        });

        const ec2networkinterface5 = new NetworkInterface(this, 'EC2NetworkInterface5', {
            description: "",
            privateIps: [
                "172.31.38.118"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup5.id
            ]
        });

        const ec2networkinterface6 = new NetworkInterface(this, 'EC2NetworkInterface6', {
            description: "",
            privateIps: [
                "172.31.45.164"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup2.id
            ]
        });

        const ec2networkinterface7 = new NetworkInterface(this, 'EC2NetworkInterface7', {
            description: "",
            privateIps: [
                "172.31.39.19"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup9.id
            ]
        });

        const ec2networkinterface8 = new NetworkInterface(this, 'EC2NetworkInterface8', {
            description: "",
            privateIps: [
                "172.31.41.81"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup10.id
            ]
        });

        const ec2networkinterface9 = new NetworkInterface(this, 'EC2NetworkInterface9', {
            description: "",
            privateIps: [
                "172.31.45.77"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup9.id
            ]
        });

        const ec2networkinterface10 = new NetworkInterface(this, 'EC2NetworkInterface10', {
            description: "",
            privateIps: [
                "172.31.10.164"
            ],
            subnetId: "subnet-0d1bec8ee5e597576",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup9.id
            ]
        });

        const ec2networkinterface11 = new NetworkInterface(this, 'EC2NetworkInterface11', {
            description: "",
            privateIps: [
                "172.31.42.254"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup10.id
            ]
        });

        const ec2networkinterface12 = new NetworkInterface(this, 'EC2NetworkInterface12', {
            description: "",
            privateIps: [
                "172.31.38.68"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup3.id
            ]
        });

        const ec2networkinterface13 = new NetworkInterface(this, 'EC2NetworkInterface13', {
            description: "",
            privateIps: [
                "172.31.46.97"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup9.id
            ]
        });

        const ec2networkinterface14 = new NetworkInterface(this, 'EC2NetworkInterface14', {
            description: "ELB app/Liberty52-LB/091c9dc7b00ccec2",
            privateIps: [
                "172.31.32.200"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup11.id
            ]
        });

        const ec2networkinterface15 = new NetworkInterface(this, 'EC2NetworkInterface15', {
            description: "",
            privateIps: [
                "172.31.38.157"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup8.id
            ]
        });

        const ec2networkinterface16 = new NetworkInterface(this, 'EC2NetworkInterface16', {
            description: "",
            privateIps: [
                "172.31.47.147"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup9.id
            ]
        });

        const ec2networkinterface17 = new NetworkInterface(this, 'EC2NetworkInterface17', {
            description: "",
            privateIps: [
                "172.31.37.249"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup9.id
            ]
        });

        const ec2networkinterface18 = new NetworkInterface(this, 'EC2NetworkInterface18', {
            description: "",
            privateIps: [
                "172.31.33.59"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup8.id
            ]
        });

        const ec2networkinterface19 = new NetworkInterface(this, 'EC2NetworkInterface19', {
            description: "",
            privateIps: [
                "172.31.43.47"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup9.id
            ]
        });

        const ec2networkinterface20 = new NetworkInterface(this, 'EC2NetworkInterface20', {
            description: "",
            privateIps: [
                "172.31.44.28"
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            securityGroups: [
                ec2securitygroup9.id
            ]
        });

        const ec2networkinterfaceattachment = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment', {
            networkInterfaceId: "eni-06b3d883f2e65e135",
            deviceIndex: 0,
            instanceId: "i-048ef1defd96e273b"
        });

        const ec2networkinterfaceattachment2 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment2', {
            networkInterfaceId: "eni-034094607dc795968",
            deviceIndex: 0,
            instanceId: "i-0572a1b158779c3ff"
        });

        const ec2networkinterfaceattachment3 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment3', {
            networkInterfaceId: "eni-05a7fcc0fb2b9f547",
            deviceIndex: 0,
            instanceId: "i-04f95f15cfe3c97ef"
        });

        const ec2networkinterfaceattachment4 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment4', {
            networkInterfaceId: "eni-091724cec65505141",
            deviceIndex: 0,
            instanceId: "i-0b60cb09676e14504"
        });

        const ec2networkinterfaceattachment5 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment5', {
            networkInterfaceId: "eni-073828917ffd3246f",
            deviceIndex: 0,
            instanceId: "i-02eba91498cff1643"
        });

        const ec2networkinterfaceattachment6 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment6', {
            networkInterfaceId: "eni-0aa18f96f5c3df141",
            deviceIndex: 0,
            instanceId: "i-0d6033278f154986e"
        });

        const ec2networkinterfaceattachment7 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment7', {
            networkInterfaceId: "eni-03b17038770ac05e7",
            deviceIndex: 0,
            instanceId: "i-0436f375783aee1ac"
        });

        const ec2networkinterfaceattachment8 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment8', {
            networkInterfaceId: "eni-072da824c77f89e27",
            deviceIndex: 0,
            instanceId: "i-0fff883371decc540"
        });

        const ec2networkinterfaceattachment9 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment9', {
            networkInterfaceId: "eni-02c4f98e49d09665a",
            deviceIndex: 0,
            instanceId: "i-0bd29da8bb4856c10"
        });

        const ec2networkinterfaceattachment10 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment10', {
            networkInterfaceId: "eni-0d60d65f11dcecd74",
            deviceIndex: 0,
            instanceId: "i-02e33be739e955e4a"
        });

        const ec2networkinterfaceattachment11 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment11', {
            networkInterfaceId: "eni-0748064bfbb2ff22e",
            deviceIndex: 0,
            instanceId: "i-0166e4f6d1f553767"
        });

        const ec2networkinterfaceattachment12 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment12', {
            networkInterfaceId: "eni-050179faa557e3856",
            deviceIndex: 0,
            instanceId: "i-0581e8e62acab00b8"
        });

        const ec2networkinterfaceattachment13 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment13', {
            networkInterfaceId: "eni-072c3dbce06fb26f2",
            deviceIndex: 0,
            instanceId: "i-0d5299f0a78e2610f"
        });

        const ec2networkinterfaceattachment14 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment14', {
            networkInterfaceId: "eni-03ea77fa0577326d1",
            deviceIndex: 0,
            instanceId: "i-0296978017a580f9d"
        });

        const ec2networkinterfaceattachment15 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment15', {
            networkInterfaceId: "eni-092530929455853aa",
            deviceIndex: 0,
            instanceId: "i-03be054e44220d3d6"
        });

        const ec2networkinterfaceattachment16 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment16', {
            networkInterfaceId: "eni-0e69ab8659be73bc8",
            deviceIndex: 0,
            instanceId: "i-096382f227ae6c9d4"
        });

        const ec2networkinterfaceattachment17 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment17', {
            networkInterfaceId: "eni-043ecd924546146d9",
            deviceIndex: 0,
            instanceId: "i-0ef98136276454c8f"
        });

        const ec2networkinterfaceattachment18 = new NetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment18', {
            networkInterfaceId: "eni-02f0c4482dc5046d3",
            deviceIndex: 0,
            instanceId: "i-0a7bd5bdb588098c7"
        });

        const ec2keypair = new KeyPair(this, 'EC2KeyPair', {
            publicKey: "REPLACEME",
            keyName: "api-gateway-eureka-dev"
        });

        const ec2keypair2 = new KeyPair(this, 'EC2KeyPair2', {
            publicKey: "REPLACEME",
            keyName: "global-instance"
        });

        const ec2keypair3 = new KeyPair(this, 'EC2KeyPair3', {
            publicKey: "REPLACEME",
            keyName: "JenkinsOMNMKeyPair"
        });

        const ec2keypair4 = new KeyPair(this, 'EC2KeyPair4', {
            publicKey: "REPLACEME",
            keyName: "auth-service"
        });

        const ec2keypair5 = new KeyPair(this, 'EC2KeyPair5', {
            publicKey: "REPLACEME",
            keyName: "front-end-dev"
        });

        const ec2keypair6 = new KeyPair(this, 'EC2KeyPair6', {
            publicKey: "REPLACEME",
            keyName: "product-service"
        });

        const ec2keypair7 = new KeyPair(this, 'EC2KeyPair7', {
            publicKey: "REPLACEME",
            keyName: "fe-admin"
        });

        const ec2keypair8 = new KeyPair(this, 'EC2KeyPair8', {
            publicKey: "REPLACEME",
            keyName: "admin-instance"
        });

        const ec2keypair9 = new KeyPair(this, 'EC2KeyPair9', {
            publicKey: "REPLACEME",
            keyName: "global-2"
        });

        const ec2eip = new Eip(this, 'EC2EIP', {
            vpc: true,
            instance: "i-0a7bd5bdb588098c7"
        });

        const ec2eipassociation = new EipAssociation(this, 'EC2EIPAssociation', {
            allocationId: "eipalloc-0ecb6cdb16809a0ed",
            instanceId: "i-0a7bd5bdb588098c7",
            networkInterfaceId: "eni-02f0c4482dc5046d3",
            privateIpAddress: "172.31.44.28"
        });

        const route53hostedzone = new Route53Zone(this, 'Route53HostedZone', {
            name: "liberty52.com."
        });

        const route53recordset = new Route53Record(this, 'Route53RecordSet', {
            name: "liberty52.com.",
            type: "A",
            alias: [{
                name: "dualstack.liberty52-lb-1731211295.ap-northeast-2.elb.amazonaws.com.",
                zoneId: "ZWKZPGTI48KDX",
                evaluateTargetHealth: true
            }],
            zoneId: "Z06575413USXOGJGFQ1WW"
        });

        const route53recordset2 = new Route53Record(this, 'Route53RecordSet2', {
            name: "liberty52.com.",
            type: "AAAA",
            alias: [{
                name: "dualstack.liberty52-lb-1731211295.ap-northeast-2.elb.amazonaws.com.",
                zoneId: "ZWKZPGTI48KDX",
                evaluateTargetHealth: true
            }],
            zoneId: "Z06575413USXOGJGFQ1WW"
        });

        const route53recordset3 = new Route53Record(this, 'Route53RecordSet3', {
            name: "liberty52.com.",
            type: "NS",
            ttl: 172800,
            records: [
                "ns-649.awsdns-17.net.",
                "ns-1665.awsdns-16.co.uk.",
                "ns-1523.awsdns-62.org.",
                "ns-48.awsdns-06.com."
            ],
            zoneId: "Z06575413USXOGJGFQ1WW"
        });

        const route53recordset4 = new Route53Record(this, 'Route53RecordSet4', {
            name: "liberty52.com.",
            type: "SOA",
            ttl: 900,
            records: [
                "ns-649.awsdns-17.net. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400"
            ],
            zoneId: "Z06575413USXOGJGFQ1WW"
        });

        const route53recordset5 = new Route53Record(this, 'Route53RecordSet5', {
            name: "admin.liberty52.com.",
            type: "A",
            alias: [{
                name: "dualstack.liberty52-lb-1731211295.ap-northeast-2.elb.amazonaws.com.",
                zoneId: "ZWKZPGTI48KDX",
                evaluateTargetHealth: true
            }],
            zoneId: "Z06575413USXOGJGFQ1WW"
        });

        const route53recordset6 = new Route53Record(this, 'Route53RecordSet6', {
            name: "admin.liberty52.com.",
            type: "AAAA",
            alias: [{
                name: "dualstack.liberty52-lb-1731211295.ap-northeast-2.elb.amazonaws.com.",
                zoneId: "ZWKZPGTI48KDX",
                evaluateTargetHealth: true
            }],
            zoneId: "Z06575413USXOGJGFQ1WW"
        });

        const iamuser = new IamUser(this, 'IAMUser', {
            path: "/",
            name: "Liberty52-S3-Admin",
            tags: [{

            }]
        });

        const iamservicelinkedrole = new IamServiceLinkedRole(this, 'IAMServiceLinkedRole', {
            awsServiceName: "elasticloadbalancing.amazonaws.com",
            description: "Allows ELB to call AWS services on your behalf."
        });

        const iamservicelinkedrole2 = new IamServiceLinkedRole(this, 'IAMServiceLinkedRole2', {
            awsServiceName: "globalaccelerator.amazonaws.com",
            description: "Allows Global Accelerator to call AWS services on customer's behalf"
        });

        const iamservicelinkedrole3 = new IamServiceLinkedRole(this, 'IAMServiceLinkedRole3', {
            awsServiceName: "organizations.amazonaws.com",
            description: "Service-linked role used by AWS Organizations to enable integration of other AWS services with Organizations."
        });

        const iamaccesskey = new IamAccessKey(this, 'IAMAccessKey', {
            status: "Active",
            user: "Liberty52-S3-Admin"
        });

        const iamaccesskey2 = new IamAccessKey(this, 'IAMAccessKey2', {
            status: "Active",
            user: "former"
        });

        new TerraformOutput(this, 'ec2instance', {
            value: ec2instance
        });

        new TerraformOutput(this, 'ec2instance2', {
            value: ec2instance2
        });

        new TerraformOutput(this, 'ec2instance3', {
            value: ec2instance3
        });

        new TerraformOutput(this, 'ec2instance4', {
            value: ec2instance4
        });

        new TerraformOutput(this, 'ec2instance5', {
            value: ec2instance5
        });

        new TerraformOutput(this, 'ec2instance6', {
            value: ec2instance6
        });

        new TerraformOutput(this, 'ec2instance7', {
            value: ec2instance7
        });

        new TerraformOutput(this, 'ec2instance8', {
            value: ec2instance8
        });

        new TerraformOutput(this, 'ec2instance9', {
            value: ec2instance9
        });

        new TerraformOutput(this, 'ec2instance10', {
            value: ec2instance10
        });

        new TerraformOutput(this, 'elasticloadbalancingv2loadbalancer', {
            value: elasticloadbalancingv2loadbalancer
        });

        new TerraformOutput(this, 'elasticloadbalancingv2listener', {
            value: elasticloadbalancingv2listener
        });

        new TerraformOutput(this, 'elasticloadbalancingv2listener2', {
            value: elasticloadbalancingv2listener2
        });

        new TerraformOutput(this, 'elasticloadbalancingv2listener3', {
            value: elasticloadbalancingv2listener3
        });

        new TerraformOutput(this, 'elasticloadbalancingv2listenerrule', {
            value: elasticloadbalancingv2listenerrule
        });

        new TerraformOutput(this, 'elasticloadbalancingv2targetgroup', {
            value: elasticloadbalancingv2targetgroup
        });

        new TerraformOutput(this, 'elasticloadbalancingv2targetgroup2', {
            value: elasticloadbalancingv2targetgroup2
        });

        new TerraformOutput(this, 'elasticloadbalancingv2targetgroup3', {
            value: elasticloadbalancingv2targetgroup3
        });

        new TerraformOutput(this, 'elasticloadbalancingv2targetgroup4', {
            value: elasticloadbalancingv2targetgroup4
        });

        new TerraformOutput(this, 'ec2securitygroup', {
            value: ec2securitygroup
        });

        new TerraformOutput(this, 'ec2securitygroup2', {
            value: ec2securitygroup2
        });

        new TerraformOutput(this, 'ec2securitygroup3', {
            value: ec2securitygroup3
        });

        new TerraformOutput(this, 'ec2securitygroup4', {
            value: ec2securitygroup4
        });

        new TerraformOutput(this, 'ec2securitygroup5', {
            value: ec2securitygroup5
        });

        new TerraformOutput(this, 'ec2securitygroup6', {
            value: ec2securitygroup6
        });

        new TerraformOutput(this, 'ec2securitygroup7', {
            value: ec2securitygroup7
        });

        new TerraformOutput(this, 'ec2securitygroup8', {
            value: ec2securitygroup8
        });

        new TerraformOutput(this, 'ec2securitygroup9', {
            value: ec2securitygroup9
        });

        new TerraformOutput(this, 'ec2securitygroup10', {
            value: ec2securitygroup10
        });

        new TerraformOutput(this, 'ec2securitygroup11', {
            value: ec2securitygroup11
        });

        new TerraformOutput(this, 'ec2volume', {
            value: ec2volume
        });

        new TerraformOutput(this, 'ec2volume2', {
            value: ec2volume2
        });

        new TerraformOutput(this, 'ec2volume3', {
            value: ec2volume3
        });

        new TerraformOutput(this, 'ec2volume4', {
            value: ec2volume4
        });

        new TerraformOutput(this, 'ec2volume5', {
            value: ec2volume5
        });

        new TerraformOutput(this, 'ec2volume6', {
            value: ec2volume6
        });

        new TerraformOutput(this, 'ec2volume7', {
            value: ec2volume7
        });

        new TerraformOutput(this, 'ec2volume8', {
            value: ec2volume8
        });

        new TerraformOutput(this, 'ec2volume9', {
            value: ec2volume9
        });

        new TerraformOutput(this, 'ec2volume10', {
            value: ec2volume10
        });

        new TerraformOutput(this, 'ec2volumeattachment', {
            value: ec2volumeattachment
        });

        new TerraformOutput(this, 'ec2volumeattachment2', {
            value: ec2volumeattachment2
        });

        new TerraformOutput(this, 'ec2volumeattachment3', {
            value: ec2volumeattachment3
        });

        new TerraformOutput(this, 'ec2volumeattachment4', {
            value: ec2volumeattachment4
        });

        new TerraformOutput(this, 'ec2volumeattachment5', {
            value: ec2volumeattachment5
        });

        new TerraformOutput(this, 'ec2volumeattachment6', {
            value: ec2volumeattachment6
        });

        new TerraformOutput(this, 'ec2volumeattachment7', {
            value: ec2volumeattachment7
        });

        new TerraformOutput(this, 'ec2volumeattachment8', {
            value: ec2volumeattachment8
        });

        new TerraformOutput(this, 'ec2volumeattachment9', {
            value: ec2volumeattachment9
        });

        new TerraformOutput(this, 'ec2volumeattachment10', {
            value: ec2volumeattachment10
        });

        new TerraformOutput(this, 'ec2networkinterface', {
            value: ec2networkinterface
        });

        new TerraformOutput(this, 'ec2networkinterface2', {
            value: ec2networkinterface2
        });

        new TerraformOutput(this, 'ec2networkinterface3', {
            value: ec2networkinterface3
        });

        new TerraformOutput(this, 'ec2networkinterface4', {
            value: ec2networkinterface4
        });

        new TerraformOutput(this, 'ec2networkinterface5', {
            value: ec2networkinterface5
        });

        new TerraformOutput(this, 'ec2networkinterface6', {
            value: ec2networkinterface6
        });

        new TerraformOutput(this, 'ec2networkinterface7', {
            value: ec2networkinterface7
        });

        new TerraformOutput(this, 'ec2networkinterface8', {
            value: ec2networkinterface8
        });

        new TerraformOutput(this, 'ec2networkinterface9', {
            value: ec2networkinterface9
        });

        new TerraformOutput(this, 'ec2networkinterface10', {
            value: ec2networkinterface10
        });

        new TerraformOutput(this, 'ec2networkinterface11', {
            value: ec2networkinterface11
        });

        new TerraformOutput(this, 'ec2networkinterface12', {
            value: ec2networkinterface12
        });

        new TerraformOutput(this, 'ec2networkinterface13', {
            value: ec2networkinterface13
        });

        new TerraformOutput(this, 'ec2networkinterface14', {
            value: ec2networkinterface14
        });

        new TerraformOutput(this, 'ec2networkinterface15', {
            value: ec2networkinterface15
        });

        new TerraformOutput(this, 'ec2networkinterface16', {
            value: ec2networkinterface16
        });

        new TerraformOutput(this, 'ec2networkinterface17', {
            value: ec2networkinterface17
        });

        new TerraformOutput(this, 'ec2networkinterface18', {
            value: ec2networkinterface18
        });

        new TerraformOutput(this, 'ec2networkinterface19', {
            value: ec2networkinterface19
        });

        new TerraformOutput(this, 'ec2networkinterface20', {
            value: ec2networkinterface20
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment', {
            value: ec2networkinterfaceattachment
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment2', {
            value: ec2networkinterfaceattachment2
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment3', {
            value: ec2networkinterfaceattachment3
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment4', {
            value: ec2networkinterfaceattachment4
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment5', {
            value: ec2networkinterfaceattachment5
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment6', {
            value: ec2networkinterfaceattachment6
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment7', {
            value: ec2networkinterfaceattachment7
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment8', {
            value: ec2networkinterfaceattachment8
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment9', {
            value: ec2networkinterfaceattachment9
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment10', {
            value: ec2networkinterfaceattachment10
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment11', {
            value: ec2networkinterfaceattachment11
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment12', {
            value: ec2networkinterfaceattachment12
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment13', {
            value: ec2networkinterfaceattachment13
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment14', {
            value: ec2networkinterfaceattachment14
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment15', {
            value: ec2networkinterfaceattachment15
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment16', {
            value: ec2networkinterfaceattachment16
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment17', {
            value: ec2networkinterfaceattachment17
        });

        new TerraformOutput(this, 'ec2networkinterfaceattachment18', {
            value: ec2networkinterfaceattachment18
        });

        new TerraformOutput(this, 'ec2keypair', {
            value: ec2keypair
        });

        new TerraformOutput(this, 'ec2keypair2', {
            value: ec2keypair2
        });

        new TerraformOutput(this, 'ec2keypair3', {
            value: ec2keypair3
        });

        new TerraformOutput(this, 'ec2keypair4', {
            value: ec2keypair4
        });

        new TerraformOutput(this, 'ec2keypair5', {
            value: ec2keypair5
        });

        new TerraformOutput(this, 'ec2keypair6', {
            value: ec2keypair6
        });

        new TerraformOutput(this, 'ec2keypair7', {
            value: ec2keypair7
        });

        new TerraformOutput(this, 'ec2keypair8', {
            value: ec2keypair8
        });

        new TerraformOutput(this, 'ec2keypair9', {
            value: ec2keypair9
        });

        new TerraformOutput(this, 'ec2eip', {
            value: ec2eip
        });

        new TerraformOutput(this, 'ec2eipassociation', {
            value: ec2eipassociation
        });

        new TerraformOutput(this, 'route53hostedzone', {
            value: route53hostedzone
        });

        new TerraformOutput(this, 'route53recordset', {
            value: route53recordset
        });

        new TerraformOutput(this, 'route53recordset2', {
            value: route53recordset2
        });

        new TerraformOutput(this, 'route53recordset3', {
            value: route53recordset3
        });

        new TerraformOutput(this, 'route53recordset4', {
            value: route53recordset4
        });

        new TerraformOutput(this, 'route53recordset5', {
            value: route53recordset5
        });

        new TerraformOutput(this, 'route53recordset6', {
            value: route53recordset6
        });

        new TerraformOutput(this, 'iamuser', {
            value: iamuser
        });

        new TerraformOutput(this, 'iamservicelinkedrole', {
            value: iamservicelinkedrole
        });

        new TerraformOutput(this, 'iamservicelinkedrole2', {
            value: iamservicelinkedrole2
        });

        new TerraformOutput(this, 'iamservicelinkedrole3', {
            value: iamservicelinkedrole3
        });

        new TerraformOutput(this, 'iamaccesskey', {
            value: iamaccesskey
        });

        new TerraformOutput(this, 'iamaccesskey2', {
            value: iamaccesskey2
        });

    }
}

const app = new App();
new MyStack(app, 'my-stack');
app.synth();
