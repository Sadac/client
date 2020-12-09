# Client Service (UI)

In order to stablish communication between the browser and our cluster, we can create a
NodePort for every single Pod to expose them to the outside, but this is not a good approach, so we need
to create a `Load Balancer Service` to have one single point of entry into our entire cluster

## Setup the ingress-nginx
In order to create a Load Balancer + Ingress we can use the
https://kubernetes.github.io/ingress-nginx/deploy/#provider-specific-steps project, and apply the manifest depending on our OS.
For Mac:
```sh
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.41.2/deploy/static/provider/cloud/deploy.yaml
```
