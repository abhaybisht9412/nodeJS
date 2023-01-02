#include<bits/stdc++.h>
using namespace std;

int main(){
    string s = "My name is abc" ;
    stack<char> st;
    vector<string> ans;
    string temp;
    for(int i = s.size()-1 ;i>=0 ;i--){
        if(s[i] == ' '){
            while(!st.empty()){
                temp+=st.top();
                st.pop();
            }
            // reverse(temp.begin(),temp.end());
            ans.push_back(temp);
            temp.clear();
        }
        else{
            st.push(s[i]);
        }
    }
    temp.clear();
    while(!st.empty()){
        
        temp+=st.top();
        st.pop();
    }
    ans.push_back(temp);
    for(auto i : ans) cout << i << " ";
}