import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as elasticloadbalancingv2 from '@aws-cdk/aws-elasticloadbalancingv2';
import * as route53 from '@aws-cdk/aws-route53';
import * as iam from '@aws-cdk/aws-iam';

export class MyStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const EC2Instance = new ec2.CfnInstance(this, 'EC2Instance', {
            imageId: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.small",
            keyName: "global-instance",
            availabilityZone: "ap-northeast-2a",
            tenancy: "default",
            subnetId: "subnet-0d1bec8ee5e597576",
            ebsOptimized: false,
            securityGroupIds: [
                EC2SecurityGroup9.ref
            ],
            sourceDestCheck: true,
            blockDeviceMappings: [
                {
                    deviceName: "/dev/sda1",
                    ebs: {
                        encrypted: false,
                        volumeSize: 30,
                        snapshotId: "snap-09b4c533ece1689cd",
                        volumeType: "gp2",
                        deleteOnTermination: true
                    }
                }
            ],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [
                {
                    key: "Name",
                    value: "Kafka-2"
                }
            ],
            hibernationOptions: {
                configured: false
            },
            enclaveOptions: {
                enabled: false
            }
        });

        const EC2Instance2 = new ec2.CfnInstance(this, 'EC2Instance2', {
            imageId: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "fe-admin",
            availabilityZone: EC2Instance3.attrAvailabilityZone,
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            securityGroupIds: [
                EC2SecurityGroup9.ref
            ],
            sourceDestCheck: true,
            blockDeviceMappings: [
                {
                    deviceName: "/dev/sda1",
                    ebs: {
                        encrypted: false,
                        volumeSize: 30,
                        snapshotId: "snap-09b4c533ece1689cd",
                        volumeType: "gp2",
                        deleteOnTermination: true
                    }
                }
            ],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [
                {
                    key: "Name",
                    value: "FE-admin-page-2"
                }
            ],
            hibernationOptions: {
                configured: false
            },
            enclaveOptions: {
                enabled: false
            }
        });

        const EC2Instance3 = new ec2.CfnInstance(this, 'EC2Instance3', {
            imageId: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "global-instance",
            availabilityZone: EC2Instance4.attrAvailabilityZone,
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            securityGroupIds: [
                EC2SecurityGroup9.ref
            ],
            sourceDestCheck: true,
            blockDeviceMappings: [
                {
                    deviceName: "/dev/sda1",
                    ebs: {
                        encrypted: false,
                        volumeSize: 30,
                        snapshotId: "snap-09b4c533ece1689cd",
                        volumeType: "gp2",
                        deleteOnTermination: true
                    }
                }
            ],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [
                {
                    key: "Name",
                    value: "Eureka-dev-2"
                }
            ],
            hibernationOptions: {
                configured: false
            },
            enclaveOptions: {
                enabled: false
            }
        });

        const EC2Instance4 = new ec2.CfnInstance(this, 'EC2Instance4', {
            imageId: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "global-instance",
            availabilityZone: EC2Instance5.attrAvailabilityZone,
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            securityGroupIds: [
                EC2SecurityGroup9.ref
            ],
            sourceDestCheck: true,
            blockDeviceMappings: [
                {
                    deviceName: "/dev/sda1",
                    ebs: {
                        encrypted: false,
                        volumeSize: 30,
                        snapshotId: "snap-09b4c533ece1689cd",
                        volumeType: "gp2",
                        deleteOnTermination: true
                    }
                }
            ],
            tags: [
                {
                    key: "Name",
                    value: "BE-Product-2"
                }
            ],
            hibernationOptions: {
                configured: false
            },
            enclaveOptions: {
                enabled: false
            }
        });

        const EC2Instance5 = new ec2.CfnInstance(this, 'EC2Instance5', {
            imageId: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "global-instance",
            availabilityZone: EC2Instance6.attrAvailabilityZone,
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            securityGroupIds: [
                EC2SecurityGroup9.ref
            ],
            sourceDestCheck: true,
            blockDeviceMappings: [
                {
                    deviceName: "/dev/sda1",
                    ebs: {
                        encrypted: false,
                        volumeSize: 30,
                        snapshotId: "snap-09b4c533ece1689cd",
                        volumeType: "gp2",
                        deleteOnTermination: true
                    }
                }
            ],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [
                {
                    key: "Name",
                    value: "BE-Auth-2"
                }
            ],
            hibernationOptions: {
                configured: false
            },
            enclaveOptions: {
                enabled: false
            }
        });

        const EC2Instance6 = new ec2.CfnInstance(this, 'EC2Instance6', {
            imageId: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "global-instance",
            availabilityZone: EC2Instance7.attrAvailabilityZone,
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            securityGroupIds: [
                EC2SecurityGroup9.ref
            ],
            sourceDestCheck: true,
            blockDeviceMappings: [
                {
                    deviceName: "/dev/sda1",
                    ebs: {
                        encrypted: false,
                        volumeSize: 30,
                        snapshotId: "snap-09b4c533ece1689cd",
                        volumeType: "gp2",
                        deleteOnTermination: true
                    }
                }
            ],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [
                {
                    key: "Name",
                    value: "BE-Global-Config-2"
                }
            ],
            hibernationOptions: {
                configured: false
            },
            enclaveOptions: {
                enabled: false
            }
        });

        const EC2Instance7 = new ec2.CfnInstance(this, 'EC2Instance7', {
            imageId: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.small",
            keyName: "global-instance",
            availabilityZone: EC2Instance8.attrAvailabilityZone,
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            securityGroupIds: [
                EC2SecurityGroup9.ref
            ],
            sourceDestCheck: true,
            blockDeviceMappings: [
                {
                    deviceName: "/dev/sda1",
                    ebs: {
                        encrypted: false,
                        volumeSize: 30,
                        snapshotId: "snap-09b4c533ece1689cd",
                        volumeType: "gp2",
                        deleteOnTermination: true
                    }
                }
            ],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [
                {
                    key: "Name",
                    value: "BE-Product-2"
                }
            ],
            hibernationOptions: {
                configured: false
            },
            enclaveOptions: {
                enabled: false
            }
        });

        const EC2Instance8 = new ec2.CfnInstance(this, 'EC2Instance8', {
            imageId: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "global-instance",
            availabilityZone: EC2Instance9.attrAvailabilityZone,
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            securityGroupIds: [
                EC2SecurityGroup10.ref
            ],
            sourceDestCheck: true,
            blockDeviceMappings: [
                {
                    deviceName: "/dev/sda1",
                    ebs: {
                        encrypted: false,
                        volumeSize: 8,
                        snapshotId: "snap-09b4c533ece1689cd",
                        volumeType: "gp2",
                        deleteOnTermination: true
                    }
                }
            ],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [
                {
                    key: "Name",
                    value: "FE-front-end-2"
                }
            ],
            hibernationOptions: {
                configured: false
            },
            enclaveOptions: {
                enabled: false
            }
        });

        const EC2Instance9 = new ec2.CfnInstance(this, 'EC2Instance9', {
            imageId: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "global-instance",
            availabilityZone: EC2Instance10.attrAvailabilityZone,
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            securityGroupIds: [
                EC2SecurityGroup9.ref
            ],
            sourceDestCheck: true,
            blockDeviceMappings: [
                {
                    deviceName: "/dev/sda1",
                    ebs: {
                        encrypted: false,
                        volumeSize: 30,
                        snapshotId: "snap-09b4c533ece1689cd",
                        volumeType: "gp2",
                        deleteOnTermination: true
                    }
                }
            ],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [
                {
                    key: "Name",
                    value: "BE-Admin-2"
                }
            ],
            hibernationOptions: {
                configured: false
            },
            enclaveOptions: {
                enabled: false
            }
        });

        const EC2Instance10 = new ec2.CfnInstance(this, 'EC2Instance10', {
            imageId: "ami-0c9c942bd7bf113a2",
            instanceType: "t2.micro",
            keyName: "global-instance",
            availabilityZone: "ap-northeast-2c",
            tenancy: "default",
            subnetId: "subnet-02174c2714aedd080",
            ebsOptimized: false,
            securityGroupIds: [
                EC2SecurityGroup9.ref
            ],
            sourceDestCheck: true,
            blockDeviceMappings: [
                {
                    deviceName: "/dev/sda1",
                    ebs: {
                        encrypted: false,
                        volumeSize: 30,
                        snapshotId: "snap-09b4c533ece1689cd",
                        volumeType: "gp2",
                        deleteOnTermination: true
                    }
                }
            ],
            iamInstanceProfile: "ec2-codedeploy-role",
            tags: [
                {
                    key: "Name",
                    value: "BE-Gateway/Eureka-2"
                }
            ],
            hibernationOptions: {
                configured: false
            },
            enclaveOptions: {
                enabled: false
            }
        });

        const ElasticLoadBalancingV2LoadBalancer = new elasticloadbalancingv2.CfnLoadBalancer(this, 'ElasticLoadBalancingV2LoadBalancer', {
            name: "Liberty52-LB",
            scheme: "internet-facing",
            type: "application",
            subnets: [
                "subnet-02174c2714aedd080",
                "subnet-0d1bec8ee5e597576"
            ],
            securityGroups: [
                EC2SecurityGroup11.ref
            ],
            ipAddressType: "ipv4",
            loadBalancerAttributes: [
                {
                    key: "access_logs.s3.enabled",
                    value: "false"
                },
                {
                    key: "idle_timeout.timeout_seconds",
                    value: "60"
                },
                {
                    key: "deletion_protection.enabled",
                    value: "false"
                },
                {
                    key: "routing.http2.enabled",
                    value: "true"
                },
                {
                    key: "routing.http.drop_invalid_header_fields.enabled",
                    value: "false"
                },
                {
                    key: "routing.http.xff_client_port.enabled",
                    value: "false"
                },
                {
                    key: "routing.http.preserve_host_header.enabled",
                    value: "false"
                },
                {
                    key: "routing.http.xff_header_processing.mode",
                    value: "append"
                },
                {
                    key: "load_balancing.cross_zone.enabled",
                    value: "true"
                },
                {
                    key: "routing.http.desync_mitigation_mode",
                    value: "defensive"
                },
                {
                    key: "waf.fail_open.enabled",
                    value: "false"
                },
                {
                    key: "routing.http.x_amzn_tls_version_and_cipher_suite.enabled",
                    value: "false"
                }
            ]
        });

        const ElasticLoadBalancingV2Listener = new elasticloadbalancingv2.CfnListener(this, 'ElasticLoadBalancingV2Listener', {
            loadBalancerArn: ElasticLoadBalancingV2LoadBalancer.ref,
            port: 443,
            protocol: "HTTPS",
            sslPolicy: "ELBSecurityPolicy-TLS13-1-2-2021-06",
            certificates: [
                {
                    certificateArn: "arn:aws:acm:ap-northeast-2:059971508604:certificate/6283f2b6-2762-40e2-89b6-98d60c6fac0e"
                }
            ],
            defaultActions: [
                {
                    order: 1,
                    targetGroupArn: ElasticLoadBalancingV2TargetGroup3.ref,
                    type: "forward"
                }
            ]
        });

        const ElasticLoadBalancingV2Listener2 = new elasticloadbalancingv2.CfnListener(this, 'ElasticLoadBalancingV2Listener2', {
            loadBalancerArn: ElasticLoadBalancingV2LoadBalancer.ref,
            port: 444,
            protocol: "HTTPS",
            sslPolicy: "ELBSecurityPolicy-TLS13-1-2-2021-06",
            certificates: [
                {
                    certificateArn: "arn:aws:acm:ap-northeast-2:059971508604:certificate/6283f2b6-2762-40e2-89b6-98d60c6fac0e"
                }
            ],
            defaultActions: [
                {
                    order: 1,
                    targetGroupArn: ElasticLoadBalancingV2TargetGroup.ref,
                    type: "forward"
                }
            ]
        });

        const ElasticLoadBalancingV2Listener3 = new elasticloadbalancingv2.CfnListener(this, 'ElasticLoadBalancingV2Listener3', {
            loadBalancerArn: ElasticLoadBalancingV2LoadBalancer.ref,
            port: 80,
            protocol: "HTTP",
            defaultActions: [
                {
                    order: 1,
                    redirectConfig: {
                        protocol: "HTTPS",
                        port: "443",
                        host: "#{host}",
                        path: "/#{path}",
                        query: "#{query}",
                        statusCode: "HTTP_301"
                    },
                    type: "redirect"
                }
            ]
        });

        const ElasticLoadBalancingV2ListenerRule = new elasticloadbalancingv2.CfnListenerRule(this, 'ElasticLoadBalancingV2ListenerRule', {
            priority: "1",
            listenerArn: ElasticLoadBalancingV2Listener.ref,
            conditions: [
                {
                    field: "host-header",
                    values: [
                        "admin.liberty52.com"
                    ]
                }
            ],
            actions: [
                {
                    type: "forward",
                    targetGroupArn: ElasticLoadBalancingV2TargetGroup4.ref,
                    order: 1,
                    forwardConfig: {
                        targetGroups: [
                            {
                                targetGroupArn: ElasticLoadBalancingV2TargetGroup4.ref,
                                weight: 1
                            }
                        ],
                        targetGroupStickinessConfig: {
                            enabled: false
                        }
                    }
                }
            ]
        });

        const ElasticLoadBalancingV2TargetGroup = new elasticloadbalancingv2.CfnTargetGroup(this, 'ElasticLoadBalancingV2TargetGroup', {
            healthCheckIntervalSeconds: 30,
            healthCheckPath: "/actuator/health",
            port: 8080,
            protocol: "HTTP",
            healthCheckPort: "traffic-port",
            healthCheckProtocol: "HTTP",
            healthCheckTimeoutSeconds: 5,
            unhealthyThresholdCount: 2,
            targetType: "instance",
            matcher: {
                httpCode: "200"
            },
            healthyThresholdCount: 5,
            vpcId: "vpc-0ea0500e1dda4d85b",
            name: "8080group",
            healthCheckEnabled: true,
            targetGroupAttributes: [
                {
                    key: "target_group_health.unhealthy_state_routing.minimum_healthy_targets.count",
                    value: "1"
                },
                {
                    key: "stickiness.enabled",
                    value: "false"
                },
                {
                    key: "target_group_health.unhealthy_state_routing.minimum_healthy_targets.percentage",
                    value: "off"
                },
                {
                    key: "deregistration_delay.timeout_seconds",
                    value: "300"
                },
                {
                    key: "target_group_health.dns_failover.minimum_healthy_targets.count",
                    value: "1"
                },
                {
                    key: "stickiness.app_cookie.cookie_name",
                    value: ""
                },
                {
                    key: "stickiness.type",
                    value: "lb_cookie"
                },
                {
                    key: "stickiness.lb_cookie.duration_seconds",
                    value: "86400"
                },
                {
                    key: "slow_start.duration_seconds",
                    value: "0"
                },
                {
                    key: "stickiness.app_cookie.duration_seconds",
                    value: "86400"
                },
                {
                    key: "target_group_health.dns_failover.minimum_healthy_targets.percentage",
                    value: "off"
                },
                {
                    key: "load_balancing.cross_zone.enabled",
                    value: "use_load_balancer_configuration"
                },
                {
                    key: "load_balancing.algorithm.type",
                    value: "round_robin"
                }
            ],
            targets: [
                {
                    id: EC2Instance10.ref,
                    port: 8080
                },
                {
                    id: "i-02eba91498cff1643",
                    port: 8080
                }
            ]
        });

        const ElasticLoadBalancingV2TargetGroup2 = new elasticloadbalancingv2.CfnTargetGroup(this, 'ElasticLoadBalancingV2TargetGroup2', {
            healthCheckIntervalSeconds: 30,
            healthCheckPath: "/",
            port: 443,
            protocol: "HTTPS",
            healthCheckPort: "traffic-port",
            healthCheckProtocol: "HTTPS",
            healthCheckTimeoutSeconds: 5,
            unhealthyThresholdCount: 2,
            targetType: "instance",
            matcher: {
                httpCode: "200"
            },
            healthyThresholdCount: 5,
            vpcId: "vpc-0ea0500e1dda4d85b",
            name: "https-group",
            healthCheckEnabled: true,
            targetGroupAttributes: [
                {
                    key: "target_group_health.unhealthy_state_routing.minimum_healthy_targets.count",
                    value: "1"
                },
                {
                    key: "stickiness.enabled",
                    value: "true"
                },
                {
                    key: "target_group_health.unhealthy_state_routing.minimum_healthy_targets.percentage",
                    value: "off"
                },
                {
                    key: "deregistration_delay.timeout_seconds",
                    value: "300"
                },
                {
                    key: "target_group_health.dns_failover.minimum_healthy_targets.count",
                    value: "1"
                },
                {
                    key: "stickiness.app_cookie.cookie_name",
                    value: ""
                },
                {
                    key: "stickiness.type",
                    value: "lb_cookie"
                },
                {
                    key: "stickiness.lb_cookie.duration_seconds",
                    value: "86400"
                },
                {
                    key: "slow_start.duration_seconds",
                    value: "0"
                },
                {
                    key: "stickiness.app_cookie.duration_seconds",
                    value: "86400"
                },
                {
                    key: "target_group_health.dns_failover.minimum_healthy_targets.percentage",
                    value: "off"
                },
                {
                    key: "load_balancing.cross_zone.enabled",
                    value: "use_load_balancer_configuration"
                },
                {
                    key: "load_balancing.algorithm.type",
                    value: "round_robin"
                }
            ],
            targets: [
                {
                    id: "i-0a7bd5bdb588098c7",
                    port: 443
                }
            ]
        });

        const ElasticLoadBalancingV2TargetGroup3 = new elasticloadbalancingv2.CfnTargetGroup(this, 'ElasticLoadBalancingV2TargetGroup3', {
            healthCheckIntervalSeconds: 30,
            healthCheckPath: "/",
            port: 80,
            protocol: "HTTP",
            healthCheckPort: "traffic-port",
            healthCheckProtocol: "HTTP",
            healthCheckTimeoutSeconds: 5,
            unhealthyThresholdCount: 2,
            targetType: "instance",
            matcher: {
                httpCode: "200"
            },
            healthyThresholdCount: 5,
            vpcId: "vpc-0ea0500e1dda4d85b",
            name: "http-group",
            healthCheckEnabled: true,
            targetGroupAttributes: [
                {
                    key: "target_group_health.unhealthy_state_routing.minimum_healthy_targets.count",
                    value: "1"
                },
                {
                    key: "stickiness.enabled",
                    value: "true"
                },
                {
                    key: "target_group_health.unhealthy_state_routing.minimum_healthy_targets.percentage",
                    value: "off"
                },
                {
                    key: "deregistration_delay.timeout_seconds",
                    value: "300"
                },
                {
                    key: "target_group_health.dns_failover.minimum_healthy_targets.count",
                    value: "1"
                },
                {
                    key: "stickiness.app_cookie.cookie_name",
                    value: ""
                },
                {
                    key: "stickiness.type",
                    value: "lb_cookie"
                },
                {
                    key: "stickiness.lb_cookie.duration_seconds",
                    value: "86400"
                },
                {
                    key: "slow_start.duration_seconds",
                    value: "0"
                },
                {
                    key: "stickiness.app_cookie.duration_seconds",
                    value: "86400"
                },
                {
                    key: "target_group_health.dns_failover.minimum_healthy_targets.percentage",
                    value: "off"
                },
                {
                    key: "load_balancing.cross_zone.enabled",
                    value: "use_load_balancer_configuration"
                },
                {
                    key: "load_balancing.algorithm.type",
                    value: "round_robin"
                }
            ],
            targets: [
                {
                    id: EC2Instance8.ref,
                    port: 80
                },
                {
                    id: "i-0a7bd5bdb588098c7",
                    port: 80
                }
            ]
        });

        const ElasticLoadBalancingV2TargetGroup4 = new elasticloadbalancingv2.CfnTargetGroup(this, 'ElasticLoadBalancingV2TargetGroup4', {
            healthCheckIntervalSeconds: 30,
            healthCheckPath: "/",
            port: 80,
            protocol: "HTTP",
            healthCheckPort: "traffic-port",
            healthCheckProtocol: "HTTP",
            healthCheckTimeoutSeconds: 5,
            unhealthyThresholdCount: 2,
            targetType: "instance",
            matcher: {
                httpCode: "200"
            },
            healthyThresholdCount: 5,
            vpcId: "vpc-0ea0500e1dda4d85b",
            name: "admin-page",
            healthCheckEnabled: true,
            targetGroupAttributes: [
                {
                    key: "target_group_health.unhealthy_state_routing.minimum_healthy_targets.count",
                    value: "1"
                },
                {
                    key: "stickiness.enabled",
                    value: "false"
                },
                {
                    key: "target_group_health.unhealthy_state_routing.minimum_healthy_targets.percentage",
                    value: "off"
                },
                {
                    key: "deregistration_delay.timeout_seconds",
                    value: "300"
                },
                {
                    key: "target_group_health.dns_failover.minimum_healthy_targets.count",
                    value: "1"
                },
                {
                    key: "stickiness.app_cookie.cookie_name",
                    value: ""
                },
                {
                    key: "stickiness.type",
                    value: "lb_cookie"
                },
                {
                    key: "stickiness.lb_cookie.duration_seconds",
                    value: "86400"
                },
                {
                    key: "slow_start.duration_seconds",
                    value: "0"
                },
                {
                    key: "stickiness.app_cookie.duration_seconds",
                    value: "86400"
                },
                {
                    key: "target_group_health.dns_failover.minimum_healthy_targets.percentage",
                    value: "off"
                },
                {
                    key: "load_balancing.cross_zone.enabled",
                    value: "use_load_balancer_configuration"
                },
                {
                    key: "load_balancing.algorithm.type",
                    value: "round_robin"
                }
            ],
            targets: [
                {
                    id: "i-03be054e44220d3d6",
                    port: 80
                },
                {
                    id: "i-02e33be739e955e4a",
                    port: 80
                }
            ]
        });

        const EC2SecurityGroup = new ec2.CfnSecurityGroup(this, 'EC2SecurityGroup', {
            groupDescription: "launch-wizard-5 created 2023-09-14T00:15:29.237Z",
            groupName: "launch-wizard-5",
            vpcId: "vpc-0ea0500e1dda4d85b",
            securityGroupIngress: [
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 80,
                    ipProtocol: "tcp",
                    toPort: 80
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 22,
                    ipProtocol: "tcp",
                    toPort: 22
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 443,
                    ipProtocol: "tcp",
                    toPort: 443
                }
            ],
            securityGroupEgress: [
                {
                    cidrIp: "0.0.0.0/0",
                    ipProtocol: "-1"
                }
            ]
        });

        const EC2SecurityGroup2 = new ec2.CfnSecurityGroup(this, 'EC2SecurityGroup2', {
            groupDescription: "launch-wizard-1 created 2023-03-31T09:30:50.522Z",
            groupName: "launch-wizard-1",
            tags: [
                {
                    key: "Name",
                    value: "Api-gateway-Eureka-rules"
                }
            ],
            vpcId: "vpc-0ea0500e1dda4d85b",
            securityGroupIngress: [
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 8080,
                    ipProtocol: "tcp",
                    toPort: 8080
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 8761,
                    ipProtocol: "tcp",
                    toPort: 8761
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 22,
                    ipProtocol: "tcp",
                    toPort: 22
                }
            ],
            securityGroupEgress: [
                {
                    cidrIp: "0.0.0.0/0",
                    ipProtocol: "-1"
                }
            ]
        });

        const EC2SecurityGroup3 = new ec2.CfnSecurityGroup(this, 'EC2SecurityGroup3', {
            groupDescription: "launch-wizard-2 created 2023-03-31T10:28:16.880Z",
            groupName: "launch-wizard-2",
            tags: [
                {
                    key: "Name",
                    value: "Global-instance-rules"
                }
            ],
            vpcId: "vpc-0ea0500e1dda4d85b",
            securityGroupIngress: [
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 8888,
                    ipProtocol: "tcp",
                    toPort: 8888
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 22,
                    ipProtocol: "tcp",
                    toPort: 22
                },
                {
                    cidrIp: "0.0.0.0/0",
                    description: "zookeeper",
                    fromPort: 2181,
                    ipProtocol: "tcp",
                    toPort: 2181
                },
                {
                    cidrIp: "0.0.0.0/0",
                    description: "kafka",
                    fromPort: 9092,
                    ipProtocol: "tcp",
                    toPort: 9092
                }
            ],
            securityGroupEgress: [
                {
                    cidrIp: "0.0.0.0/0",
                    ipProtocol: "-1"
                }
            ]
        });

        const EC2SecurityGroup4 = new ec2.CfnSecurityGroup(this, 'EC2SecurityGroup4', {
            groupDescription: "launch-wizard-3 created 2023-09-13T13:04:35.131Z",
            groupName: "launch-wizard-3",
            vpcId: "vpc-0ea0500e1dda4d85b",
            securityGroupIngress: [
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 80,
                    ipProtocol: "tcp",
                    toPort: 80
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 22,
                    ipProtocol: "tcp",
                    toPort: 22
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 443,
                    ipProtocol: "tcp",
                    toPort: 443
                }
            ],
            securityGroupEgress: [
                {
                    cidrIp: "0.0.0.0/0",
                    ipProtocol: "-1"
                }
            ]
        });

        const EC2SecurityGroup5 = new ec2.CfnSecurityGroup(this, 'EC2SecurityGroup5', {
            groupDescription: "This security group was generated by AWS Marketplace and is based on recommended settings for CentOS 7 (x86_64) - with Updates HVM version CentOS-7.2009-20220825.1 provided by Amazon Web Services",
            groupName: "CentOS 7 (x86_64) - with Updates HVM-CentOS-7.2009-20220825.1-AutogenByAWSMP--1",
            vpcId: "vpc-0ea0500e1dda4d85b",
            securityGroupIngress: [
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 80,
                    ipProtocol: "tcp",
                    toPort: 80
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 8080,
                    ipProtocol: "tcp",
                    toPort: 8080
                },
                {
                    cidrIp: "0.0.0.0/0",
                    description: "eureka-port",
                    fromPort: 8761,
                    ipProtocol: "tcp",
                    toPort: 8761
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 22,
                    ipProtocol: "tcp",
                    toPort: 22
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 443,
                    ipProtocol: "tcp",
                    toPort: 443
                }
            ],
            securityGroupEgress: [
                {
                    cidrIp: "0.0.0.0/0",
                    ipProtocol: "-1"
                }
            ]
        });

        const EC2SecurityGroup6 = new ec2.CfnSecurityGroup(this, 'EC2SecurityGroup6', {
            groupDescription: "launch-wizard-6 created 2023-09-14T00:18:04.440Z",
            groupName: "launch-wizard-6",
            vpcId: "vpc-0ea0500e1dda4d85b",
            securityGroupIngress: [
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 80,
                    ipProtocol: "tcp",
                    toPort: 80
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 22,
                    ipProtocol: "tcp",
                    toPort: 22
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 443,
                    ipProtocol: "tcp",
                    toPort: 443
                }
            ],
            securityGroupEgress: [
                {
                    cidrIp: "0.0.0.0/0",
                    ipProtocol: "-1"
                }
            ]
        });

        const EC2SecurityGroup7 = new ec2.CfnSecurityGroup(this, 'EC2SecurityGroup7', {
            groupDescription: "launch-wizard-4 created 2023-09-14T00:06:56.497Z",
            groupName: "launch-wizard-4",
            vpcId: "vpc-0ea0500e1dda4d85b",
            securityGroupIngress: [
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 80,
                    ipProtocol: "tcp",
                    toPort: 80
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 22,
                    ipProtocol: "tcp",
                    toPort: 22
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 443,
                    ipProtocol: "tcp",
                    toPort: 443
                }
            ],
            securityGroupEgress: [
                {
                    cidrIp: "0.0.0.0/0",
                    ipProtocol: "-1"
                }
            ]
        });

        const EC2SecurityGroup8 = new ec2.CfnSecurityGroup(this, 'EC2SecurityGroup8', {
            groupDescription: "8080 Port Open Groups for Service Instances",
            groupName: "prod-service-group",
            vpcId: "vpc-0ea0500e1dda4d85b",
            securityGroupIngress: [
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 8080,
                    ipProtocol: "tcp",
                    toPort: 8080
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 22,
                    ipProtocol: "tcp",
                    toPort: 22
                }
            ],
            securityGroupEgress: [
                {
                    cidrIp: "0.0.0.0/0",
                    ipProtocol: "-1"
                }
            ]
        });

        const EC2SecurityGroup9 = new ec2.CfnSecurityGroup(this, 'EC2SecurityGroup9', {
            groupDescription: "all",
            groupName: "all",
            vpcId: "vpc-0ea0500e1dda4d85b",
            securityGroupIngress: [
                {
                    cidrIp: "0.0.0.0/0",
                    ipProtocol: "-1"
                }
            ],
            securityGroupEgress: [
                {
                    cidrIp: "0.0.0.0/0",
                    ipProtocol: "-1"
                }
            ]
        });

        const EC2SecurityGroup10 = new ec2.CfnSecurityGroup(this, 'EC2SecurityGroup10', {
            groupDescription: "FE Server for Development",
            groupName: "FE-DEV",
            tags: [
                {
                    key: "Name",
                    value: "FE-DEV"
                }
            ],
            vpcId: "vpc-0ea0500e1dda4d85b",
            securityGroupIngress: [
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 80,
                    ipProtocol: "tcp",
                    toPort: 80
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 22,
                    ipProtocol: "tcp",
                    toPort: 22
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 3000,
                    ipProtocol: "tcp",
                    toPort: 3000
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 443,
                    ipProtocol: "tcp",
                    toPort: 443
                },
                {
                    cidrIpv6: "::/0",
                    fromPort: 443,
                    ipProtocol: "tcp",
                    toPort: 443
                }
            ],
            securityGroupEgress: [
                {
                    cidrIp: "0.0.0.0/0",
                    ipProtocol: "-1"
                }
            ]
        });

        const EC2SecurityGroup11 = new ec2.CfnSecurityGroup(this, 'EC2SecurityGroup11', {
            groupDescription: "Secret-group fro ELB",
            groupName: "LoadBalancer",
            vpcId: "vpc-0ea0500e1dda4d85b",
            securityGroupIngress: [
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 81,
                    ipProtocol: "tcp",
                    toPort: 81
                },
                {
                    cidrIpv6: "::/0",
                    fromPort: 81,
                    ipProtocol: "tcp",
                    toPort: 81
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 80,
                    ipProtocol: "tcp",
                    toPort: 80
                },
                {
                    cidrIpv6: "::/0",
                    fromPort: 80,
                    ipProtocol: "tcp",
                    toPort: 80
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 444,
                    ipProtocol: "tcp",
                    toPort: 444
                },
                {
                    cidrIpv6: "::/0",
                    fromPort: 444,
                    ipProtocol: "tcp",
                    toPort: 444
                },
                {
                    cidrIp: "0.0.0.0/0",
                    fromPort: 443,
                    ipProtocol: "tcp",
                    toPort: 443
                },
                {
                    cidrIpv6: "::/0",
                    fromPort: 443,
                    ipProtocol: "tcp",
                    toPort: 443
                }
            ],
            securityGroupEgress: [
                {
                    cidrIp: "0.0.0.0/0",
                    ipProtocol: "-1"
                }
            ]
        });

        const EC2Volume = new ec2.CfnVolume(this, 'EC2Volume', {
            availabilityZone: EC2Instance2.attrAvailabilityZone,
            encrypted: false,
            size: 30,
            volumeType: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            multiAttachEnabled: false
        });

        const EC2Volume2 = new ec2.CfnVolume(this, 'EC2Volume2', {
            availabilityZone: EC2Instance2.attrAvailabilityZone,
            encrypted: false,
            size: 30,
            volumeType: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            multiAttachEnabled: false
        });

        const EC2Volume3 = new ec2.CfnVolume(this, 'EC2Volume3', {
            availabilityZone: EC2Instance2.attrAvailabilityZone,
            encrypted: false,
            size: 30,
            volumeType: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            multiAttachEnabled: false
        });

        const EC2Volume4 = new ec2.CfnVolume(this, 'EC2Volume4', {
            availabilityZone: EC2Instance2.attrAvailabilityZone,
            encrypted: false,
            size: 30,
            volumeType: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            multiAttachEnabled: false
        });

        const EC2Volume5 = new ec2.CfnVolume(this, 'EC2Volume5', {
            availabilityZone: EC2Instance2.attrAvailabilityZone,
            encrypted: false,
            size: 30,
            volumeType: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            multiAttachEnabled: false
        });

        const EC2Volume6 = new ec2.CfnVolume(this, 'EC2Volume6', {
            availabilityZone: EC2Instance2.attrAvailabilityZone,
            encrypted: false,
            size: 8,
            volumeType: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            multiAttachEnabled: false
        });

        const EC2Volume7 = new ec2.CfnVolume(this, 'EC2Volume7', {
            availabilityZone: EC2Instance2.attrAvailabilityZone,
            encrypted: false,
            size: 30,
            volumeType: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            multiAttachEnabled: false
        });

        const EC2Volume8 = new ec2.CfnVolume(this, 'EC2Volume8', {
            availabilityZone: EC2Instance2.attrAvailabilityZone,
            encrypted: false,
            size: 30,
            volumeType: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            multiAttachEnabled: false
        });

        const EC2Volume9 = new ec2.CfnVolume(this, 'EC2Volume9', {
            availabilityZone: EC2Instance2.attrAvailabilityZone,
            encrypted: false,
            size: 30,
            volumeType: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            multiAttachEnabled: false
        });

        const EC2Volume10 = new ec2.CfnVolume(this, 'EC2Volume10', {
            availabilityZone: EC2Instance.attrAvailabilityZone,
            encrypted: false,
            size: 30,
            volumeType: "gp2",
            snapshotId: "snap-09b4c533ece1689cd",
            multiAttachEnabled: false
        });

        const EC2VolumeAttachment = new ec2.CfnVolumeAttachment(this, 'EC2VolumeAttachment', {
            volumeId: EC2Volume.ref,
            instanceId: EC2Instance10.ref,
            device: "/dev/sda1"
        });

        const EC2VolumeAttachment2 = new ec2.CfnVolumeAttachment(this, 'EC2VolumeAttachment2', {
            volumeId: EC2Volume2.ref,
            instanceId: EC2Instance6.ref,
            device: "/dev/sda1"
        });

        const EC2VolumeAttachment3 = new ec2.CfnVolumeAttachment(this, 'EC2VolumeAttachment3', {
            volumeId: EC2Volume3.ref,
            instanceId: EC2Instance9.ref,
            device: "/dev/sda1"
        });

        const EC2VolumeAttachment4 = new ec2.CfnVolumeAttachment(this, 'EC2VolumeAttachment4', {
            volumeId: EC2Volume4.ref,
            instanceId: EC2Instance2.ref,
            device: "/dev/sda1"
        });

        const EC2VolumeAttachment5 = new ec2.CfnVolumeAttachment(this, 'EC2VolumeAttachment5', {
            volumeId: EC2Volume5.ref,
            instanceId: EC2Instance4.ref,
            device: "/dev/sda1"
        });

        const EC2VolumeAttachment6 = new ec2.CfnVolumeAttachment(this, 'EC2VolumeAttachment6', {
            volumeId: EC2Volume6.ref,
            instanceId: EC2Instance8.ref,
            device: "/dev/sda1"
        });

        const EC2VolumeAttachment7 = new ec2.CfnVolumeAttachment(this, 'EC2VolumeAttachment7', {
            volumeId: EC2Volume7.ref,
            instanceId: EC2Instance3.ref,
            device: "/dev/sda1"
        });

        const EC2VolumeAttachment8 = new ec2.CfnVolumeAttachment(this, 'EC2VolumeAttachment8', {
            volumeId: EC2Volume8.ref,
            instanceId: EC2Instance5.ref,
            device: "/dev/sda1"
        });

        const EC2VolumeAttachment9 = new ec2.CfnVolumeAttachment(this, 'EC2VolumeAttachment9', {
            volumeId: EC2Volume9.ref,
            instanceId: EC2Instance7.ref,
            device: "/dev/sda1"
        });

        const EC2VolumeAttachment10 = new ec2.CfnVolumeAttachment(this, 'EC2VolumeAttachment10', {
            volumeId: EC2Volume10.ref,
            instanceId: EC2Instance.ref,
            device: "/dev/sda1"
        });

        const EC2NetworkInterface = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface', {
            description: "",
            privateIpAddress: EC2Instance7.attrPrivateIp,
            privateIpAddresses: [
                {
                    privateIpAddress: EC2Instance7.attrPrivateIp,
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup9.ref
            ]
        });

        const EC2NetworkInterface2 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface2', {
            description: "",
            privateIpAddress: "172.31.47.161",
            privateIpAddresses: [
                {
                    privateIpAddress: "172.31.47.161",
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup8.ref
            ]
        });

        const EC2NetworkInterface3 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface3', {
            description: "ELB app/Liberty52-LB/091c9dc7b00ccec2",
            privateIpAddress: "172.31.8.234",
            privateIpAddresses: [
                {
                    privateIpAddress: "172.31.8.234",
                    primary: true
                }
            ],
            subnetId: "subnet-0d1bec8ee5e597576",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup11.ref
            ]
        });

        const EC2NetworkInterface4 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface4', {
            description: "",
            privateIpAddress: EC2Instance10.attrPrivateIp,
            privateIpAddresses: [
                {
                    privateIpAddress: EC2Instance10.attrPrivateIp,
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup9.ref
            ]
        });

        const EC2NetworkInterface5 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface5', {
            description: "",
            privateIpAddress: "172.31.38.118",
            privateIpAddresses: [
                {
                    privateIpAddress: "172.31.38.118",
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup5.ref
            ]
        });

        const EC2NetworkInterface6 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface6', {
            description: "",
            privateIpAddress: "172.31.45.164",
            privateIpAddresses: [
                {
                    privateIpAddress: "172.31.45.164",
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup2.ref
            ]
        });

        const EC2NetworkInterface7 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface7', {
            description: "",
            privateIpAddress: EC2Instance6.attrPrivateIp,
            privateIpAddresses: [
                {
                    privateIpAddress: EC2Instance6.attrPrivateIp,
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup9.ref
            ]
        });

        const EC2NetworkInterface8 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface8', {
            description: "",
            privateIpAddress: EC2Instance8.attrPrivateIp,
            privateIpAddresses: [
                {
                    privateIpAddress: EC2Instance8.attrPrivateIp,
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup10.ref
            ]
        });

        const EC2NetworkInterface9 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface9', {
            description: "",
            privateIpAddress: EC2Instance4.attrPrivateIp,
            privateIpAddresses: [
                {
                    privateIpAddress: EC2Instance4.attrPrivateIp,
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup9.ref
            ]
        });

        const EC2NetworkInterface10 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface10', {
            description: "",
            privateIpAddress: EC2Instance.attrPrivateIp,
            privateIpAddresses: [
                {
                    privateIpAddress: EC2Instance.attrPrivateIp,
                    primary: true
                }
            ],
            subnetId: "subnet-0d1bec8ee5e597576",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup9.ref
            ]
        });

        const EC2NetworkInterface11 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface11', {
            description: "",
            privateIpAddress: "172.31.42.254",
            privateIpAddresses: [
                {
                    privateIpAddress: "172.31.42.254",
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup10.ref
            ]
        });

        const EC2NetworkInterface12 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface12', {
            description: "",
            privateIpAddress: "172.31.38.68",
            privateIpAddresses: [
                {
                    privateIpAddress: "172.31.38.68",
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup3.ref
            ]
        });

        const EC2NetworkInterface13 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface13', {
            description: "",
            privateIpAddress: EC2Instance3.attrPrivateIp,
            privateIpAddresses: [
                {
                    privateIpAddress: EC2Instance3.attrPrivateIp,
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup9.ref
            ]
        });

        const EC2NetworkInterface14 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface14', {
            description: "ELB app/Liberty52-LB/091c9dc7b00ccec2",
            privateIpAddress: "172.31.32.200",
            privateIpAddresses: [
                {
                    privateIpAddress: "172.31.32.200",
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup11.ref
            ]
        });

        const EC2NetworkInterface15 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface15', {
            description: "",
            privateIpAddress: "172.31.38.157",
            privateIpAddresses: [
                {
                    privateIpAddress: "172.31.38.157",
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup8.ref
            ]
        });

        const EC2NetworkInterface16 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface16', {
            description: "",
            privateIpAddress: EC2Instance5.attrPrivateIp,
            privateIpAddresses: [
                {
                    privateIpAddress: EC2Instance5.attrPrivateIp,
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup9.ref
            ]
        });

        const EC2NetworkInterface17 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface17', {
            description: "",
            privateIpAddress: EC2Instance2.attrPrivateIp,
            privateIpAddresses: [
                {
                    privateIpAddress: EC2Instance2.attrPrivateIp,
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup9.ref
            ]
        });

        const EC2NetworkInterface18 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface18', {
            description: "",
            privateIpAddress: "172.31.33.59",
            privateIpAddresses: [
                {
                    privateIpAddress: "172.31.33.59",
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup8.ref
            ]
        });

        const EC2NetworkInterface19 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface19', {
            description: "",
            privateIpAddress: EC2Instance9.attrPrivateIp,
            privateIpAddresses: [
                {
                    privateIpAddress: EC2Instance9.attrPrivateIp,
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup9.ref
            ]
        });

        const EC2NetworkInterface20 = new ec2.CfnNetworkInterface(this, 'EC2NetworkInterface20', {
            description: "",
            privateIpAddress: "172.31.44.28",
            privateIpAddresses: [
                {
                    privateIpAddress: "172.31.44.28",
                    primary: true
                }
            ],
            subnetId: "subnet-02174c2714aedd080",
            sourceDestCheck: true,
            groupSet: [
                EC2SecurityGroup9.ref
            ]
        });

        const EC2NetworkInterfaceAttachment = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment', {
            networkInterfaceId: "eni-06b3d883f2e65e135",
            deviceIndex: 0,
            instanceId: EC2Instance7.ref,
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment2 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment2', {
            networkInterfaceId: "eni-034094607dc795968",
            deviceIndex: 0,
            instanceId: "i-0572a1b158779c3ff",
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment3 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment3', {
            networkInterfaceId: "eni-05a7fcc0fb2b9f547",
            deviceIndex: 0,
            instanceId: EC2Instance10.ref,
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment4 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment4', {
            networkInterfaceId: "eni-091724cec65505141",
            deviceIndex: 0,
            instanceId: "i-0b60cb09676e14504",
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment5 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment5', {
            networkInterfaceId: "eni-073828917ffd3246f",
            deviceIndex: 0,
            instanceId: "i-02eba91498cff1643",
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment6 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment6', {
            networkInterfaceId: "eni-0aa18f96f5c3df141",
            deviceIndex: 0,
            instanceId: EC2Instance6.ref,
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment7 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment7', {
            networkInterfaceId: "eni-03b17038770ac05e7",
            deviceIndex: 0,
            instanceId: EC2Instance8.ref,
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment8 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment8', {
            networkInterfaceId: "eni-072da824c77f89e27",
            deviceIndex: 0,
            instanceId: EC2Instance4.ref,
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment9 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment9', {
            networkInterfaceId: "eni-02c4f98e49d09665a",
            deviceIndex: 0,
            instanceId: EC2Instance.ref,
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment10 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment10', {
            networkInterfaceId: "eni-0d60d65f11dcecd74",
            deviceIndex: 0,
            instanceId: "i-02e33be739e955e4a",
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment11 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment11', {
            networkInterfaceId: "eni-0748064bfbb2ff22e",
            deviceIndex: 0,
            instanceId: "i-0166e4f6d1f553767",
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment12 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment12', {
            networkInterfaceId: "eni-050179faa557e3856",
            deviceIndex: 0,
            instanceId: EC2Instance3.ref,
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment13 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment13', {
            networkInterfaceId: "eni-072c3dbce06fb26f2",
            deviceIndex: 0,
            instanceId: "i-0d5299f0a78e2610f",
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment14 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment14', {
            networkInterfaceId: "eni-03ea77fa0577326d1",
            deviceIndex: 0,
            instanceId: EC2Instance5.ref,
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment15 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment15', {
            networkInterfaceId: "eni-092530929455853aa",
            deviceIndex: 0,
            instanceId: EC2Instance2.ref,
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment16 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment16', {
            networkInterfaceId: "eni-0e69ab8659be73bc8",
            deviceIndex: 0,
            instanceId: "i-096382f227ae6c9d4",
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment17 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment17', {
            networkInterfaceId: "eni-043ecd924546146d9",
            deviceIndex: 0,
            instanceId: EC2Instance9.ref,
            deleteOnTermination: true
        });

        const EC2NetworkInterfaceAttachment18 = new ec2.CfnNetworkInterfaceAttachment(this, 'EC2NetworkInterfaceAttachment18', {
            networkInterfaceId: "eni-02f0c4482dc5046d3",
            deviceIndex: 0,
            instanceId: "i-0a7bd5bdb588098c7",
            deleteOnTermination: true
        });

        const EC2KeyPair = new ec2.CfnKeyPair(this, 'EC2KeyPair', {
            keyName: "api-gateway-eureka-dev",
            keyType: "rsa"
        });

        const EC2KeyPair2 = new ec2.CfnKeyPair(this, 'EC2KeyPair2', {
            keyName: "global-instance",
            keyType: "rsa"
        });

        const EC2KeyPair3 = new ec2.CfnKeyPair(this, 'EC2KeyPair3', {
            keyName: "JenkinsOMNMKeyPair",
            keyType: "rsa"
        });

        const EC2KeyPair4 = new ec2.CfnKeyPair(this, 'EC2KeyPair4', {
            keyName: "auth-service",
            keyType: "rsa"
        });

        const EC2KeyPair5 = new ec2.CfnKeyPair(this, 'EC2KeyPair5', {
            keyName: "front-end-dev",
            keyType: "rsa"
        });

        const EC2KeyPair6 = new ec2.CfnKeyPair(this, 'EC2KeyPair6', {
            keyName: "product-service",
            keyType: "rsa"
        });

        const EC2KeyPair7 = new ec2.CfnKeyPair(this, 'EC2KeyPair7', {
            keyName: "fe-admin",
            keyType: "rsa"
        });

        const EC2KeyPair8 = new ec2.CfnKeyPair(this, 'EC2KeyPair8', {
            keyName: "admin-instance",
            keyType: "rsa"
        });

        const EC2KeyPair9 = new ec2.CfnKeyPair(this, 'EC2KeyPair9', {
            keyName: "global-2",
            keyType: "rsa"
        });

        const EC2EIP = new ec2.CfnEIP(this, 'EC2EIP', {
            domain: "vpc",
            instanceId: "i-0a7bd5bdb588098c7"
        });

        const EC2EIPAssociation = new ec2.CfnEIPAssociation(this, 'EC2EIPAssociation', {
            allocationId: EC2EIP.attrAllocationId,
            instanceId: "i-0a7bd5bdb588098c7",
            networkInterfaceId: "eni-02f0c4482dc5046d3",
            privateIpAddress: "172.31.44.28"
        });

        const Route53HostedZone = new route53.CfnHostedZone(this, 'Route53HostedZone', {
            name: Route53RecordSet.ref
        });

        const Route53RecordSet = new route53.CfnRecordSet(this, 'Route53RecordSet', {
            name: Route53RecordSet2.ref,
            type: "A",
            aliasTarget: {
                hostedZoneId: ElasticLoadBalancingV2LoadBalancer.attrCanonicalHostedZoneID,
                dnsName: "dualstack.liberty52-lb-1731211295.ap-northeast-2.elb.amazonaws.com.",
                evaluateTargetHealth: true
            },
            hostedZoneId: "Z06575413USXOGJGFQ1WW"
        });

        const Route53RecordSet2 = new route53.CfnRecordSet(this, 'Route53RecordSet2', {
            name: Route53RecordSet3.ref,
            type: "AAAA",
            aliasTarget: {
                hostedZoneId: ElasticLoadBalancingV2LoadBalancer.attrCanonicalHostedZoneID,
                dnsName: "dualstack.liberty52-lb-1731211295.ap-northeast-2.elb.amazonaws.com.",
                evaluateTargetHealth: true
            },
            hostedZoneId: "Z06575413USXOGJGFQ1WW"
        });

        const Route53RecordSet3 = new route53.CfnRecordSet(this, 'Route53RecordSet3', {
            name: Route53RecordSet4.ref,
            type: "NS",
            ttl: 172800,
            resourceRecords: [
                "ns-649.awsdns-17.net.",
                "ns-1665.awsdns-16.co.uk.",
                "ns-1523.awsdns-62.org.",
                "ns-48.awsdns-06.com."
            ],
            hostedZoneId: "Z06575413USXOGJGFQ1WW"
        });

        const Route53RecordSet4 = new route53.CfnRecordSet(this, 'Route53RecordSet4', {
            name: "liberty52.com.",
            type: "SOA",
            ttl: 900,
            resourceRecords: [
                "ns-649.awsdns-17.net. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400"
            ],
            hostedZoneId: "Z06575413USXOGJGFQ1WW"
        });

        const Route53RecordSet5 = new route53.CfnRecordSet(this, 'Route53RecordSet5', {
            name: Route53RecordSet6.ref,
            type: "A",
            aliasTarget: {
                hostedZoneId: ElasticLoadBalancingV2LoadBalancer.attrCanonicalHostedZoneID,
                dnsName: "dualstack.liberty52-lb-1731211295.ap-northeast-2.elb.amazonaws.com.",
                evaluateTargetHealth: true
            },
            hostedZoneId: Route53HostedZone.ref
        });

        const Route53RecordSet6 = new route53.CfnRecordSet(this, 'Route53RecordSet6', {
            name: Route53RecordSet5.ref,
            type: "AAAA",
            aliasTarget: {
                hostedZoneId: ElasticLoadBalancingV2LoadBalancer.attrCanonicalHostedZoneID,
                dnsName: "dualstack.liberty52-lb-1731211295.ap-northeast-2.elb.amazonaws.com.",
                evaluateTargetHealth: true
            },
            hostedZoneId: Route53HostedZone.ref
        });

        const IAMUser = new iam.CfnUser(this, 'IAMUser', {
            path: "/",
            userName: "Liberty52-S3-Admin",
            managedPolicyArns: [
                "arn:aws:iam::aws:policy/AmazonS3FullAccess"
            ]
        });

        const IAMServiceLinkedRole = new iam.CfnServiceLinkedRole(this, 'IAMServiceLinkedRole', {
            awsServiceName: "elasticloadbalancing.amazonaws.com",
            description: "Allows ELB to call AWS services on your behalf."
        });

        const IAMServiceLinkedRole2 = new iam.CfnServiceLinkedRole(this, 'IAMServiceLinkedRole2', {
            awsServiceName: "globalaccelerator.amazonaws.com",
            description: "Allows Global Accelerator to call AWS services on customer's behalf"
        });

        const IAMServiceLinkedRole3 = new iam.CfnServiceLinkedRole(this, 'IAMServiceLinkedRole3', {
            awsServiceName: "organizations.amazonaws.com",
            description: "Service-linked role used by AWS Organizations to enable integration of other AWS services with Organizations."
        });

        const IAMAccessKey = new iam.CfnAccessKey(this, 'IAMAccessKey', {
            status: "Active",
            userName: "Liberty52-S3-Admin"
        });

        const IAMAccessKey2 = new iam.CfnAccessKey(this, 'IAMAccessKey2', {
            status: "Active",
            userName: "former"
        });

    }
}

const app = new cdk.App();
new MyStack(app, 'my-stack-name', {env: {region: 'ap-northeast-2'}});
app.synth();
