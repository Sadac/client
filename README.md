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
posts.com is the URL we're going to fetch, defined in the `ingress-srv.yaml`

## Create a image an deployment to the React app
1. `docker build -t roccosada/client .`
2. `docker push roccosada/client`
3. Write a Deployment in k8s `client-depl.yaml` to host the new client image.
4. Apply the manifest `kubectl apply -f client-depl.yaml`
