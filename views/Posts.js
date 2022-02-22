import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { db } from '../firebase';
import Post from '../components/Post';
import { collection, getDocs } from 'firebase/firestore';

const Posts = () => {
   const [posts, setPosts] = useState([]);

   const getPosts = async() =>{
       const querySnapshot = await getDocs(collection(db, "Posts"));
       const currentPosts = [];
       querySnapshot.forEach((doc) =>{
           currentPosts.push(doc.data());
       })
       setPosts(currentPosts);
       console.log(posts)
   }
   

   useEffect(() => {
       getPosts();
   },[])

    return(
        <View>
            {posts && posts.map((post, i) => {
                return(
                    <Post key={i} image={post.image} caption={post.caption} user={post.user}/>
                )
            })}
        </View>
    )
}

export default Posts