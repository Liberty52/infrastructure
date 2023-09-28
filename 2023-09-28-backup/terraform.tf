terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = "~> 3.0"
        }
    }
}

provider "aws" {
    region = "ap-northeast-2"
}

resource "aws_instance" "EC2Instance" {
    ami = "ami-0c9c942bd7bf113a2"
    instance_type = "t2.small"
    key_name = "global-instance"
    availability_zone = "ap-northeast-2a"
    tenancy = "default"
    subnet_id = "subnet-0d1bec8ee5e597576"
    ebs_optimized = false
    vpc_security_group_ids = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
    source_dest_check = true
    root_block_device {
        volume_size = 30
        volume_type = "gp2"
        delete_on_termination = true
    }
    iam_instance_profile = "ec2-codedeploy-role"
    tags = {
        Name = "Kafka-2"
    }
}

resource "aws_instance" "EC2Instance2" {
    ami = "ami-0c9c942bd7bf113a2"
    instance_type = "t2.micro"
    key_name = "fe-admin"
    availability_zone = "ap-northeast-2c"
    tenancy = "default"
    subnet_id = "subnet-02174c2714aedd080"
    ebs_optimized = false
    vpc_security_group_ids = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
    source_dest_check = true
    root_block_device {
        volume_size = 30
        volume_type = "gp2"
        delete_on_termination = true
    }
    iam_instance_profile = "ec2-codedeploy-role"
    tags = {
        Name = "FE-admin-page-2"
    }
}

resource "aws_instance" "EC2Instance3" {
    ami = "ami-0c9c942bd7bf113a2"
    instance_type = "t2.micro"
    key_name = "global-instance"
    availability_zone = "ap-northeast-2c"
    tenancy = "default"
    subnet_id = "subnet-02174c2714aedd080"
    ebs_optimized = false
    vpc_security_group_ids = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
    source_dest_check = true
    root_block_device {
        volume_size = 30
        volume_type = "gp2"
        delete_on_termination = true
    }
    iam_instance_profile = "ec2-codedeploy-role"
    tags = {
        Name = "Eureka-dev-2"
    }
}

resource "aws_instance" "EC2Instance4" {
    ami = "ami-0c9c942bd7bf113a2"
    instance_type = "t2.micro"
    key_name = "global-instance"
    availability_zone = "ap-northeast-2c"
    tenancy = "default"
    subnet_id = "subnet-02174c2714aedd080"
    ebs_optimized = false
    vpc_security_group_ids = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
    source_dest_check = true
    root_block_device {
        volume_size = 30
        volume_type = "gp2"
        delete_on_termination = true
    }
    tags = {
        Name = "BE-Product-2"
    }
}

resource "aws_instance" "EC2Instance5" {
    ami = "ami-0c9c942bd7bf113a2"
    instance_type = "t2.micro"
    key_name = "global-instance"
    availability_zone = "ap-northeast-2c"
    tenancy = "default"
    subnet_id = "subnet-02174c2714aedd080"
    ebs_optimized = false
    vpc_security_group_ids = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
    source_dest_check = true
    root_block_device {
        volume_size = 30
        volume_type = "gp2"
        delete_on_termination = true
    }
    iam_instance_profile = "ec2-codedeploy-role"
    tags = {
        Name = "BE-Auth-2"
    }
}

resource "aws_instance" "EC2Instance6" {
    ami = "ami-0c9c942bd7bf113a2"
    instance_type = "t2.micro"
    key_name = "global-instance"
    availability_zone = "ap-northeast-2c"
    tenancy = "default"
    subnet_id = "subnet-02174c2714aedd080"
    ebs_optimized = false
    vpc_security_group_ids = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
    source_dest_check = true
    root_block_device {
        volume_size = 30
        volume_type = "gp2"
        delete_on_termination = true
    }
    iam_instance_profile = "ec2-codedeploy-role"
    tags = {
        Name = "BE-Global-Config-2"
    }
}

resource "aws_instance" "EC2Instance7" {
    ami = "ami-0c9c942bd7bf113a2"
    instance_type = "t2.small"
    key_name = "global-instance"
    availability_zone = "ap-northeast-2c"
    tenancy = "default"
    subnet_id = "subnet-02174c2714aedd080"
    ebs_optimized = false
    vpc_security_group_ids = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
    source_dest_check = true
    root_block_device {
        volume_size = 30
        volume_type = "gp2"
        delete_on_termination = true
    }
    iam_instance_profile = "ec2-codedeploy-role"
    tags = {
        Name = "BE-Product-2"
    }
}

resource "aws_instance" "EC2Instance8" {
    ami = "ami-0c9c942bd7bf113a2"
    instance_type = "t2.micro"
    key_name = "global-instance"
    availability_zone = "ap-northeast-2c"
    tenancy = "default"
    subnet_id = "subnet-02174c2714aedd080"
    ebs_optimized = false
    vpc_security_group_ids = [
        "${aws_security_group.EC2SecurityGroup10.id}"
    ]
    source_dest_check = true
    root_block_device {
        volume_size = 8
        volume_type = "gp2"
        delete_on_termination = true
    }
    iam_instance_profile = "ec2-codedeploy-role"
    tags = {
        Name = "FE-front-end-2"
    }
}

resource "aws_instance" "EC2Instance9" {
    ami = "ami-0c9c942bd7bf113a2"
    instance_type = "t2.micro"
    key_name = "global-instance"
    availability_zone = "ap-northeast-2c"
    tenancy = "default"
    subnet_id = "subnet-02174c2714aedd080"
    ebs_optimized = false
    vpc_security_group_ids = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
    source_dest_check = true
    root_block_device {
        volume_size = 30
        volume_type = "gp2"
        delete_on_termination = true
    }
    iam_instance_profile = "ec2-codedeploy-role"
    tags = {
        Name = "BE-Admin-2"
    }
}

resource "aws_instance" "EC2Instance10" {
    ami = "ami-0c9c942bd7bf113a2"
    instance_type = "t2.micro"
    key_name = "global-instance"
    availability_zone = "ap-northeast-2c"
    tenancy = "default"
    subnet_id = "subnet-02174c2714aedd080"
    ebs_optimized = false
    vpc_security_group_ids = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
    source_dest_check = true
    root_block_device {
        volume_size = 30
        volume_type = "gp2"
        delete_on_termination = true
    }
    iam_instance_profile = "ec2-codedeploy-role"
    tags = {
        Name = "BE-Gateway/Eureka-2"
    }
}

resource "aws_lb" "ElasticLoadBalancingV2LoadBalancer" {
    name = "Liberty52-LB"
    internal = false
    load_balancer_type = "application"
    subnets = [
        "subnet-02174c2714aedd080",
        "subnet-0d1bec8ee5e597576"
    ]
    security_groups = [
        "${aws_security_group.EC2SecurityGroup11.id}"
    ]
    ip_address_type = "ipv4"
    access_logs {
        enabled = false
        bucket = ""
        prefix = ""
    }
    idle_timeout = "60"
    enable_deletion_protection = "false"
    enable_http2 = "true"
    enable_cross_zone_load_balancing = "true"
}

resource "aws_lb_listener" "ElasticLoadBalancingV2Listener" {
    load_balancer_arn = "arn:aws:elasticloadbalancing:ap-northeast-2:059971508604:loadbalancer/app/Liberty52-LB/091c9dc7b00ccec2"
    port = 443
    protocol = "HTTPS"
    ssl_policy = "ELBSecurityPolicy-TLS13-1-2-2021-06"
    certificate_arn = "arn:aws:acm:ap-northeast-2:059971508604:certificate/6283f2b6-2762-40e2-89b6-98d60c6fac0e"
    default_action {
        target_group_arn = "arn:aws:elasticloadbalancing:ap-northeast-2:059971508604:targetgroup/http-group/0cc344aeb26840c9"
        type = "forward"
    }
}

resource "aws_lb_listener" "ElasticLoadBalancingV2Listener2" {
    load_balancer_arn = "arn:aws:elasticloadbalancing:ap-northeast-2:059971508604:loadbalancer/app/Liberty52-LB/091c9dc7b00ccec2"
    port = 444
    protocol = "HTTPS"
    ssl_policy = "ELBSecurityPolicy-TLS13-1-2-2021-06"
    certificate_arn = "arn:aws:acm:ap-northeast-2:059971508604:certificate/6283f2b6-2762-40e2-89b6-98d60c6fac0e"
    default_action {
        target_group_arn = "arn:aws:elasticloadbalancing:ap-northeast-2:059971508604:targetgroup/8080group/f37eeabddb0e0df6"
        type = "forward"
    }
}

resource "aws_lb_listener" "ElasticLoadBalancingV2Listener3" {
    load_balancer_arn = "arn:aws:elasticloadbalancing:ap-northeast-2:059971508604:loadbalancer/app/Liberty52-LB/091c9dc7b00ccec2"
    port = 80
    protocol = "HTTP"
    default_action {
        redirect {
            host = "#{host}"
            path = "/#{path}"
            port = "443"
            protocol = "HTTPS"
            query = "#{query}"
            status_code = "HTTP_301"
        }
        type = "redirect"
    }
}

resource "aws_lb_listener_rule" "ElasticLoadBalancingV2ListenerRule" {
    priority = "1"
    listener_arn = "arn:aws:elasticloadbalancing:ap-northeast-2:059971508604:listener/app/Liberty52-LB/091c9dc7b00ccec2/4b441eec0e161ca1"
    condition {
        field = "host-header"
        values = [
            "admin.liberty52.com"
        ]
    }
}

resource "aws_lb_target_group" "ElasticLoadBalancingV2TargetGroup" {
    health_check {
        interval = 30
        path = "/actuator/health"
        port = "traffic-port"
        protocol = "HTTP"
        timeout = 5
        unhealthy_threshold = 2
        healthy_threshold = 5
        matcher = "200"
    }
    port = 8080
    protocol = "HTTP"
    target_type = "instance"
    vpc_id = "vpc-0ea0500e1dda4d85b"
    name = "8080group"
}

resource "aws_lb_target_group" "ElasticLoadBalancingV2TargetGroup2" {
    health_check {
        interval = 30
        path = "/"
        port = "traffic-port"
        protocol = "HTTPS"
        timeout = 5
        unhealthy_threshold = 2
        healthy_threshold = 5
        matcher = "200"
    }
    port = 443
    protocol = "HTTPS"
    target_type = "instance"
    vpc_id = "vpc-0ea0500e1dda4d85b"
    name = "https-group"
}

resource "aws_lb_target_group" "ElasticLoadBalancingV2TargetGroup3" {
    health_check {
        interval = 30
        path = "/"
        port = "traffic-port"
        protocol = "HTTP"
        timeout = 5
        unhealthy_threshold = 2
        healthy_threshold = 5
        matcher = "200"
    }
    port = 80
    protocol = "HTTP"
    target_type = "instance"
    vpc_id = "vpc-0ea0500e1dda4d85b"
    name = "http-group"
}

resource "aws_lb_target_group" "ElasticLoadBalancingV2TargetGroup4" {
    health_check {
        interval = 30
        path = "/"
        port = "traffic-port"
        protocol = "HTTP"
        timeout = 5
        unhealthy_threshold = 2
        healthy_threshold = 5
        matcher = "200"
    }
    port = 80
    protocol = "HTTP"
    target_type = "instance"
    vpc_id = "vpc-0ea0500e1dda4d85b"
    name = "admin-page"
}

resource "aws_security_group" "EC2SecurityGroup" {
    description = "launch-wizard-5 created 2023-09-14T00:15:29.237Z"
    name = "launch-wizard-5"
    tags = {}
    vpc_id = "vpc-0ea0500e1dda4d85b"
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 80
        protocol = "tcp"
        to_port = 80
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 22
        protocol = "tcp"
        to_port = 22
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 443
        protocol = "tcp"
        to_port = 443
    }
    egress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 0
        protocol = "-1"
        to_port = 0
    }
}

resource "aws_security_group" "EC2SecurityGroup2" {
    description = "launch-wizard-1 created 2023-03-31T09:30:50.522Z"
    name = "launch-wizard-1"
    tags = {
        Name = "Api-gateway-Eureka-rules"
    }
    vpc_id = "vpc-0ea0500e1dda4d85b"
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 8080
        protocol = "tcp"
        to_port = 8080
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 8761
        protocol = "tcp"
        to_port = 8761
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 22
        protocol = "tcp"
        to_port = 22
    }
    egress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 0
        protocol = "-1"
        to_port = 0
    }
}

resource "aws_security_group" "EC2SecurityGroup3" {
    description = "launch-wizard-2 created 2023-03-31T10:28:16.880Z"
    name = "launch-wizard-2"
    tags = {
        Name = "Global-instance-rules"
    }
    vpc_id = "vpc-0ea0500e1dda4d85b"
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 8888
        protocol = "tcp"
        to_port = 8888
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 22
        protocol = "tcp"
        to_port = 22
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        description = "zookeeper"
        from_port = 2181
        protocol = "tcp"
        to_port = 2181
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        description = "kafka"
        from_port = 9092
        protocol = "tcp"
        to_port = 9092
    }
    egress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 0
        protocol = "-1"
        to_port = 0
    }
}

resource "aws_security_group" "EC2SecurityGroup4" {
    description = "launch-wizard-3 created 2023-09-13T13:04:35.131Z"
    name = "launch-wizard-3"
    tags = {}
    vpc_id = "vpc-0ea0500e1dda4d85b"
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 80
        protocol = "tcp"
        to_port = 80
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 22
        protocol = "tcp"
        to_port = 22
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 443
        protocol = "tcp"
        to_port = 443
    }
    egress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 0
        protocol = "-1"
        to_port = 0
    }
}

resource "aws_security_group" "EC2SecurityGroup5" {
    description = "This security group was generated by AWS Marketplace and is based on recommended settings for CentOS 7 (x86_64) - with Updates HVM version CentOS-7.2009-20220825.1 provided by Amazon Web Services"
    name = "CentOS 7 (x86_64) - with Updates HVM-CentOS-7.2009-20220825.1-AutogenByAWSMP--1"
    tags = {}
    vpc_id = "vpc-0ea0500e1dda4d85b"
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 80
        protocol = "tcp"
        to_port = 80
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 8080
        protocol = "tcp"
        to_port = 8080
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        description = "eureka-port"
        from_port = 8761
        protocol = "tcp"
        to_port = 8761
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 22
        protocol = "tcp"
        to_port = 22
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 443
        protocol = "tcp"
        to_port = 443
    }
    egress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 0
        protocol = "-1"
        to_port = 0
    }
}

resource "aws_security_group" "EC2SecurityGroup6" {
    description = "launch-wizard-6 created 2023-09-14T00:18:04.440Z"
    name = "launch-wizard-6"
    tags = {}
    vpc_id = "vpc-0ea0500e1dda4d85b"
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 80
        protocol = "tcp"
        to_port = 80
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 22
        protocol = "tcp"
        to_port = 22
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 443
        protocol = "tcp"
        to_port = 443
    }
    egress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 0
        protocol = "-1"
        to_port = 0
    }
}

resource "aws_security_group" "EC2SecurityGroup7" {
    description = "launch-wizard-4 created 2023-09-14T00:06:56.497Z"
    name = "launch-wizard-4"
    tags = {}
    vpc_id = "vpc-0ea0500e1dda4d85b"
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 80
        protocol = "tcp"
        to_port = 80
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 22
        protocol = "tcp"
        to_port = 22
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 443
        protocol = "tcp"
        to_port = 443
    }
    egress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 0
        protocol = "-1"
        to_port = 0
    }
}

resource "aws_security_group" "EC2SecurityGroup8" {
    description = "8080 Port Open Groups for Service Instances"
    name = "prod-service-group"
    tags = {}
    vpc_id = "vpc-0ea0500e1dda4d85b"
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 8080
        protocol = "tcp"
        to_port = 8080
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 22
        protocol = "tcp"
        to_port = 22
    }
    egress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 0
        protocol = "-1"
        to_port = 0
    }
}

resource "aws_security_group" "EC2SecurityGroup9" {
    description = "all"
    name = "all"
    tags = {}
    vpc_id = "vpc-0ea0500e1dda4d85b"
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 0
        protocol = "-1"
        to_port = 0
    }
    egress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 0
        protocol = "-1"
        to_port = 0
    }
}

resource "aws_security_group" "EC2SecurityGroup10" {
    description = "FE Server for Development"
    name = "FE-DEV"
    tags = {
        Name = "FE-DEV"
    }
    vpc_id = "vpc-0ea0500e1dda4d85b"
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 80
        protocol = "tcp"
        to_port = 80
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 22
        protocol = "tcp"
        to_port = 22
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 3000
        protocol = "tcp"
        to_port = 3000
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 443
        protocol = "tcp"
        to_port = 443
    }
    ingress {
        ipv6_cidr_blocks = [
            "::/0"
        ]
        from_port = 443
        protocol = "tcp"
        to_port = 443
    }
    egress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 0
        protocol = "-1"
        to_port = 0
    }
}

resource "aws_security_group" "EC2SecurityGroup11" {
    description = "Secret-group fro ELB"
    name = "LoadBalancer"
    tags = {}
    vpc_id = "vpc-0ea0500e1dda4d85b"
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 81
        protocol = "tcp"
        to_port = 81
    }
    ingress {
        ipv6_cidr_blocks = [
            "::/0"
        ]
        from_port = 81
        protocol = "tcp"
        to_port = 81
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 80
        protocol = "tcp"
        to_port = 80
    }
    ingress {
        ipv6_cidr_blocks = [
            "::/0"
        ]
        from_port = 80
        protocol = "tcp"
        to_port = 80
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 444
        protocol = "tcp"
        to_port = 444
    }
    ingress {
        ipv6_cidr_blocks = [
            "::/0"
        ]
        from_port = 444
        protocol = "tcp"
        to_port = 444
    }
    ingress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 443
        protocol = "tcp"
        to_port = 443
    }
    ingress {
        ipv6_cidr_blocks = [
            "::/0"
        ]
        from_port = 443
        protocol = "tcp"
        to_port = 443
    }
    egress {
        cidr_blocks = [
            "0.0.0.0/0"
        ]
        from_port = 0
        protocol = "-1"
        to_port = 0
    }
}

resource "aws_ebs_volume" "EC2Volume" {
    availability_zone = "ap-northeast-2c"
    encrypted = false
    size = 30
    type = "gp2"
    snapshot_id = "snap-09b4c533ece1689cd"
    tags = {}
}

resource "aws_ebs_volume" "EC2Volume2" {
    availability_zone = "ap-northeast-2c"
    encrypted = false
    size = 30
    type = "gp2"
    snapshot_id = "snap-09b4c533ece1689cd"
    tags = {}
}

resource "aws_ebs_volume" "EC2Volume3" {
    availability_zone = "ap-northeast-2c"
    encrypted = false
    size = 30
    type = "gp2"
    snapshot_id = "snap-09b4c533ece1689cd"
    tags = {}
}

resource "aws_ebs_volume" "EC2Volume4" {
    availability_zone = "ap-northeast-2c"
    encrypted = false
    size = 30
    type = "gp2"
    snapshot_id = "snap-09b4c533ece1689cd"
    tags = {}
}

resource "aws_ebs_volume" "EC2Volume5" {
    availability_zone = "ap-northeast-2c"
    encrypted = false
    size = 30
    type = "gp2"
    snapshot_id = "snap-09b4c533ece1689cd"
    tags = {}
}

resource "aws_ebs_volume" "EC2Volume6" {
    availability_zone = "ap-northeast-2c"
    encrypted = false
    size = 8
    type = "gp2"
    snapshot_id = "snap-09b4c533ece1689cd"
    tags = {}
}

resource "aws_ebs_volume" "EC2Volume7" {
    availability_zone = "ap-northeast-2c"
    encrypted = false
    size = 30
    type = "gp2"
    snapshot_id = "snap-09b4c533ece1689cd"
    tags = {}
}

resource "aws_ebs_volume" "EC2Volume8" {
    availability_zone = "ap-northeast-2c"
    encrypted = false
    size = 30
    type = "gp2"
    snapshot_id = "snap-09b4c533ece1689cd"
    tags = {}
}

resource "aws_ebs_volume" "EC2Volume9" {
    availability_zone = "ap-northeast-2c"
    encrypted = false
    size = 30
    type = "gp2"
    snapshot_id = "snap-09b4c533ece1689cd"
    tags = {}
}

resource "aws_ebs_volume" "EC2Volume10" {
    availability_zone = "ap-northeast-2a"
    encrypted = false
    size = 30
    type = "gp2"
    snapshot_id = "snap-09b4c533ece1689cd"
    tags = {}
}

resource "aws_volume_attachment" "EC2VolumeAttachment" {
    volume_id = "vol-0cae6ec20a62cffe9"
    instance_id = "i-04f95f15cfe3c97ef"
    device_name = "/dev/sda1"
}

resource "aws_volume_attachment" "EC2VolumeAttachment2" {
    volume_id = "vol-0d348218a6102b3cb"
    instance_id = "i-0d6033278f154986e"
    device_name = "/dev/sda1"
}

resource "aws_volume_attachment" "EC2VolumeAttachment3" {
    volume_id = "vol-02fe94bdb3cbcf8a0"
    instance_id = "i-0ef98136276454c8f"
    device_name = "/dev/sda1"
}

resource "aws_volume_attachment" "EC2VolumeAttachment4" {
    volume_id = "vol-07eaf4379a41302be"
    instance_id = "i-03be054e44220d3d6"
    device_name = "/dev/sda1"
}

resource "aws_volume_attachment" "EC2VolumeAttachment5" {
    volume_id = "vol-0391c35e4be9ba386"
    instance_id = "i-0fff883371decc540"
    device_name = "/dev/sda1"
}

resource "aws_volume_attachment" "EC2VolumeAttachment6" {
    volume_id = "vol-0bbd949bcda6f2427"
    instance_id = "i-0436f375783aee1ac"
    device_name = "/dev/sda1"
}

resource "aws_volume_attachment" "EC2VolumeAttachment7" {
    volume_id = "vol-07db603fa74f0e177"
    instance_id = "i-0581e8e62acab00b8"
    device_name = "/dev/sda1"
}

resource "aws_volume_attachment" "EC2VolumeAttachment8" {
    volume_id = "vol-064f451b7e0eecad8"
    instance_id = "i-0296978017a580f9d"
    device_name = "/dev/sda1"
}

resource "aws_volume_attachment" "EC2VolumeAttachment9" {
    volume_id = "vol-0e0b9736a09a48cff"
    instance_id = "i-048ef1defd96e273b"
    device_name = "/dev/sda1"
}

resource "aws_volume_attachment" "EC2VolumeAttachment10" {
    volume_id = "vol-07f88caf7a3601ebd"
    instance_id = "i-0bd29da8bb4856c10"
    device_name = "/dev/sda1"
}

resource "aws_network_interface" "EC2NetworkInterface" {
    description = ""
    private_ips = [
        "172.31.36.123"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface2" {
    description = ""
    private_ips = [
        "172.31.47.161"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup8.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface3" {
    description = "ELB app/Liberty52-LB/091c9dc7b00ccec2"
    private_ips = [
        "172.31.8.234"
    ]
    subnet_id = "subnet-0d1bec8ee5e597576"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup11.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface4" {
    description = ""
    private_ips = [
        "172.31.36.242"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface5" {
    description = ""
    private_ips = [
        "172.31.38.118"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup5.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface6" {
    description = ""
    private_ips = [
        "172.31.45.164"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup2.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface7" {
    description = ""
    private_ips = [
        "172.31.39.19"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface8" {
    description = ""
    private_ips = [
        "172.31.41.81"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup10.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface9" {
    description = ""
    private_ips = [
        "172.31.45.77"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface10" {
    description = ""
    private_ips = [
        "172.31.10.164"
    ]
    subnet_id = "subnet-0d1bec8ee5e597576"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface11" {
    description = ""
    private_ips = [
        "172.31.42.254"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup10.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface12" {
    description = ""
    private_ips = [
        "172.31.38.68"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup3.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface13" {
    description = ""
    private_ips = [
        "172.31.46.97"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface14" {
    description = "ELB app/Liberty52-LB/091c9dc7b00ccec2"
    private_ips = [
        "172.31.32.200"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup11.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface15" {
    description = ""
    private_ips = [
        "172.31.38.157"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup8.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface16" {
    description = ""
    private_ips = [
        "172.31.47.147"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface17" {
    description = ""
    private_ips = [
        "172.31.37.249"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface18" {
    description = ""
    private_ips = [
        "172.31.33.59"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup8.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface19" {
    description = ""
    private_ips = [
        "172.31.43.47"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
}

resource "aws_network_interface" "EC2NetworkInterface20" {
    description = ""
    private_ips = [
        "172.31.44.28"
    ]
    subnet_id = "subnet-02174c2714aedd080"
    source_dest_check = true
    security_groups = [
        "${aws_security_group.EC2SecurityGroup9.id}"
    ]
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment" {
    network_interface_id = "eni-06b3d883f2e65e135"
    device_index = 0
    instance_id = "i-048ef1defd96e273b"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment2" {
    network_interface_id = "eni-034094607dc795968"
    device_index = 0
    instance_id = "i-0572a1b158779c3ff"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment3" {
    network_interface_id = "eni-05a7fcc0fb2b9f547"
    device_index = 0
    instance_id = "i-04f95f15cfe3c97ef"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment4" {
    network_interface_id = "eni-091724cec65505141"
    device_index = 0
    instance_id = "i-0b60cb09676e14504"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment5" {
    network_interface_id = "eni-073828917ffd3246f"
    device_index = 0
    instance_id = "i-02eba91498cff1643"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment6" {
    network_interface_id = "eni-0aa18f96f5c3df141"
    device_index = 0
    instance_id = "i-0d6033278f154986e"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment7" {
    network_interface_id = "eni-03b17038770ac05e7"
    device_index = 0
    instance_id = "i-0436f375783aee1ac"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment8" {
    network_interface_id = "eni-072da824c77f89e27"
    device_index = 0
    instance_id = "i-0fff883371decc540"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment9" {
    network_interface_id = "eni-02c4f98e49d09665a"
    device_index = 0
    instance_id = "i-0bd29da8bb4856c10"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment10" {
    network_interface_id = "eni-0d60d65f11dcecd74"
    device_index = 0
    instance_id = "i-02e33be739e955e4a"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment11" {
    network_interface_id = "eni-0748064bfbb2ff22e"
    device_index = 0
    instance_id = "i-0166e4f6d1f553767"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment12" {
    network_interface_id = "eni-050179faa557e3856"
    device_index = 0
    instance_id = "i-0581e8e62acab00b8"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment13" {
    network_interface_id = "eni-072c3dbce06fb26f2"
    device_index = 0
    instance_id = "i-0d5299f0a78e2610f"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment14" {
    network_interface_id = "eni-03ea77fa0577326d1"
    device_index = 0
    instance_id = "i-0296978017a580f9d"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment15" {
    network_interface_id = "eni-092530929455853aa"
    device_index = 0
    instance_id = "i-03be054e44220d3d6"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment16" {
    network_interface_id = "eni-0e69ab8659be73bc8"
    device_index = 0
    instance_id = "i-096382f227ae6c9d4"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment17" {
    network_interface_id = "eni-043ecd924546146d9"
    device_index = 0
    instance_id = "i-0ef98136276454c8f"
}

resource "aws_network_interface_attachment" "EC2NetworkInterfaceAttachment18" {
    network_interface_id = "eni-02f0c4482dc5046d3"
    device_index = 0
    instance_id = "i-0a7bd5bdb588098c7"
}

resource "aws_key_pair" "EC2KeyPair" {
    public_key = "REPLACEME"
    key_name = "api-gateway-eureka-dev"
}

resource "aws_key_pair" "EC2KeyPair2" {
    public_key = "REPLACEME"
    key_name = "global-instance"
}

resource "aws_key_pair" "EC2KeyPair3" {
    public_key = "REPLACEME"
    key_name = "JenkinsOMNMKeyPair"
}

resource "aws_key_pair" "EC2KeyPair4" {
    public_key = "REPLACEME"
    key_name = "auth-service"
}

resource "aws_key_pair" "EC2KeyPair5" {
    public_key = "REPLACEME"
    key_name = "front-end-dev"
}

resource "aws_key_pair" "EC2KeyPair6" {
    public_key = "REPLACEME"
    key_name = "product-service"
}

resource "aws_key_pair" "EC2KeyPair7" {
    public_key = "REPLACEME"
    key_name = "fe-admin"
}

resource "aws_key_pair" "EC2KeyPair8" {
    public_key = "REPLACEME"
    key_name = "admin-instance"
}

resource "aws_key_pair" "EC2KeyPair9" {
    public_key = "REPLACEME"
    key_name = "global-2"
}

resource "aws_eip" "EC2EIP" {
    vpc = true
    instance = "i-0a7bd5bdb588098c7"
}

resource "aws_eip_association" "EC2EIPAssociation" {
    allocation_id = "eipalloc-0ecb6cdb16809a0ed"
    instance_id = "i-0a7bd5bdb588098c7"
    network_interface_id = "eni-02f0c4482dc5046d3"
    private_ip_address = "172.31.44.28"
}

resource "aws_route53_zone" "Route53HostedZone" {
    name = "liberty52.com."
}

resource "aws_route53_record" "Route53RecordSet" {
    name = "liberty52.com."
    type = "A"
    alias {
        name = "dualstack.liberty52-lb-1731211295.ap-northeast-2.elb.amazonaws.com."
        zone_id = "ZWKZPGTI48KDX"
        evaluate_target_health = true
    }
    zone_id = "Z06575413USXOGJGFQ1WW"
}

resource "aws_route53_record" "Route53RecordSet2" {
    name = "liberty52.com."
    type = "AAAA"
    alias {
        name = "dualstack.liberty52-lb-1731211295.ap-northeast-2.elb.amazonaws.com."
        zone_id = "ZWKZPGTI48KDX"
        evaluate_target_health = true
    }
    zone_id = "Z06575413USXOGJGFQ1WW"
}

resource "aws_route53_record" "Route53RecordSet3" {
    name = "liberty52.com."
    type = "NS"
    ttl = 172800
    records = [
        "ns-649.awsdns-17.net.",
        "ns-1665.awsdns-16.co.uk.",
        "ns-1523.awsdns-62.org.",
        "ns-48.awsdns-06.com."
    ]
    zone_id = "Z06575413USXOGJGFQ1WW"
}

resource "aws_route53_record" "Route53RecordSet4" {
    name = "liberty52.com."
    type = "SOA"
    ttl = 900
    records = [
        "ns-649.awsdns-17.net. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400"
    ]
    zone_id = "Z06575413USXOGJGFQ1WW"
}

resource "aws_route53_record" "Route53RecordSet5" {
    name = "admin.liberty52.com."
    type = "A"
    alias {
        name = "dualstack.liberty52-lb-1731211295.ap-northeast-2.elb.amazonaws.com."
        zone_id = "ZWKZPGTI48KDX"
        evaluate_target_health = true
    }
    zone_id = "Z06575413USXOGJGFQ1WW"
}

resource "aws_route53_record" "Route53RecordSet6" {
    name = "admin.liberty52.com."
    type = "AAAA"
    alias {
        name = "dualstack.liberty52-lb-1731211295.ap-northeast-2.elb.amazonaws.com."
        zone_id = "ZWKZPGTI48KDX"
        evaluate_target_health = true
    }
    zone_id = "Z06575413USXOGJGFQ1WW"
}

resource "aws_iam_user" "IAMUser" {
    path = "/"
    name = "Liberty52-S3-Admin"
    tags = {}
}

resource "aws_iam_service_linked_role" "IAMServiceLinkedRole" {
    aws_service_name = "elasticloadbalancing.amazonaws.com"
    description = "Allows ELB to call AWS services on your behalf."
}

resource "aws_iam_service_linked_role" "IAMServiceLinkedRole2" {
    aws_service_name = "globalaccelerator.amazonaws.com"
    description = "Allows Global Accelerator to call AWS services on customer's behalf"
}

resource "aws_iam_service_linked_role" "IAMServiceLinkedRole3" {
    aws_service_name = "organizations.amazonaws.com"
    description = "Service-linked role used by AWS Organizations to enable integration of other AWS services with Organizations."
}

resource "aws_iam_access_key" "IAMAccessKey" {
    status = "Active"
    user = "Liberty52-S3-Admin"
}

resource "aws_iam_access_key" "IAMAccessKey2" {
    status = "Active"
    user = "former"
}
