import React from 'react'
import {View, Text, Image,Button} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const Home = ({navigation}) => {
    const Profile= () => {
        navigation.navigate('Profile');
      }
        
    return( 
        <View style={{
            backgroundColor:'pink',
            flex:1
                     }}
        >
           <View style={{
               
               backgroundColor:'black',
               height:"15%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:40,
               paddingHorizontal:80
           }}>
               <View style={{
                   flexDirection:"row",
                   alignItems:"left",
                   
                   width:"80%"
               }}>
                   <View style={{width:"20%"}}>
                        <Text style={{
                            fontSize:36,
                            color:"#FFF",
                            fontWeight:"Italic"
                        }}>Wild Gallery</Text>
                   </View>
                   <View style={{width:"100%",alignItems:"flex-end"}}>
                         <Button
                        onPress={Profile}
                        title="Profile "
                        color=" #99ff99"
                   
                        />
                         
                   </View>
               </View>
           </View>
           <LinearGradient
            colors={["rgba(0,164,100,0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <br></br>
                   
                   <TextInput
                        placeholder="Search..."
                        placeholderTextColor="black"
                        style={{
                            fontWeight:"Bold",
                            fontSize:14,
                            width:260
                        }}
                   />
               </View>
            </LinearGradient>
                
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:250}}
                >
                    <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:5,
                            right:10,
                            height:100,
                            marginTop:220,
                            top:5
                        }}
                    />
                    <TouchableOpacity>
                        <Image
                          style={{ width: 300, height: 300, marginBottom: 100 }}
                            source={require('../../assets/images/parrot.jpg')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:3,
                            paddingHorizontal:10
                        }}>
                            
                        </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                        <Image
                          style={{ width: 300, height: 300, marginBottom: 100 }}
                            source={require('../../assets/images/cheeta.jpg')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:3,
                            paddingHorizontal:10
                        }}>
                            
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <Image
                          style={{ width: 300, height: 300, marginBottom: 100 }}
                            source={require('../../assets/images/peacock.jpg')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:3,
                            paddingHorizontal:10
                        }}>
                            
                        </View>
                        </TouchableOpacity>
                        
                
                        <TouchableOpacity>
                        <Image
                          style={{ width: 300, height: 300, marginBottom: 100 }}
                            source={require('../../assets/images/oip.jpg')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:3,
                            paddingHorizontal:10
                        }}>
                            
                        </View>
                        </TouchableOpacity>



                        <TouchableOpacity>
                        <Image
                          style={{ width: 300, height: 300, marginBottom: 100 }}
                            source={require('../../assets/images/lion.jpg')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:3,
                            paddingHorizontal:10
                        }}>
                            
                        </View>
                        </TouchableOpacity>
                    
                </ScrollView>     
               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop:-80,
               }}>    
               </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom:-100}}
                >       
                          
                </ScrollView>             
        </View>
        
    )
}
export default Home;