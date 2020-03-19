#include<bits/stdc++.h>
using namespace std;
#define int long long
int32_t main(){

int t;
t=1;
while(t--){
// int n;
// cin>>n;
// int A[n];
// for(int i=0;i<n;i++)cin>>A[i];

// sort(A,A+n);
// int k=0;


// int diff=1;
// int prev=A[0];

// for(int i=1;i<n;i++){
//     if(prev!=A[i])diff++;
//     prev=A[i];
// }


int u,v;
cin>>u>>v;
if(u>v || (u%2==0&&v%2==1) || (u%2==1&&v%2==0))cout<<-1;

else if(u==0&&v==0)cout<<0;

else{


int ans=1;
ans=ans+v-u;
cout<<ans<<endl;

cout<<u<<" ";

for(int i=0;i<v-u;i=i+2)cout<<2<<" ";



}


}


}