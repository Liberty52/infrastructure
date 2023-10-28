eksctl create nodegroup \
  --cluster liberty52 \
  --region ap-northeast-2\
  --name t3a-mediums-110-pods \
  --node-type t3a.medium \
  --nodes 1 \
  --nodes-min 1 \
  --nodes-max 3 \
  --node-volume-size 30 \
  --max-pods-per-node=110