import { Component } from "react";
import { Api, ApiallowFile } from "./Api";

class Listing extends Component {
  async Login(data) {
    return Api.post("/user/login", data);
  }

  async profileVerify() {
    return Api.get("/user/profile")
  }

  async Dashboard() {
    return Api.get(`/user/dashboard`);
  }
  
  async PodcastGet() {
    return Api.get("/podcast/get")
  }
  
  async PodcastDetail(data) {
    return Api.get(`/podcast/get/${data}`);
  }
  
  async PodcastAdd(data) {
    return Api.post("/podcast/add", data);
  }

  async PodcastUpdate(id,data) {
    return Api.post(`/podcast/update/${id}`, data);
  }

  async PodcastDelete(id) {
    return Api.delete(`/podcast/delete/${id}`);
  }

  async EpisodeAdd(data) {
    return Api.post("/file/add", data);
  }

  async EpisodeUpdate(id,data) {
    return Api.post(`/file/update/${id}`, data);
  }

  async EpisodeDelete(id) {
    return Api.delete(`/file/delete/${id}`);
  }

  async AddSubscriber(data){
    return Api.post("/subscriber/add" , data)
  }
async enquiryGet() {
    return Api.get("/contact/get")
  }
   async GetSubscriber(){
    return Api.get("/subscriber/get" , )
  }
  async AddContact(data){
    return  Api.post("/contact/add" ,data)
  }
  render() {
    return (
      <div>
        <></>
      </div>
    );
  }
}

export default Listing;