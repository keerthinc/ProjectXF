import React, {useState} from "react";

import {FlatList, View, Text, StyleSheet,
     TouchableOpacity, ScrollView, Pressable, Image, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from "../components/HomeHeader";
import {colors, parameters} from '../global/styles';
import{filterData, restaurantData} from "../global/Data";
import FoodCard from "../components/FoodCard";
import CountDown from "react-native-countdown-component";

const SCREEN_WIDTH = Dimensions.get("window").width

const HomeScreen=()=>{
    const[delivery, setDelivery] = useState(true)
    const[indexCheck, setIndexCheck] =useState("0")
    return(
        <View style={styles.container}>
           <HomeHeader/>
           <ScrollView
            stickyHeaderIndices={[0]}
            showsHorizontalScrollIndicator={true}
            >
                <View style={{backgroundColor:colors.Cardbackgroun, paddingBottom:8}}>
                        <View style={{marginTop:10, flexDirection:"row", justifyContent:"space-evenly"}}>
                                <TouchableOpacity
                                    onPress={()=>{
                                        setDelivery(true)
                                    }}
                                >
                                    <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.buttons:colors.grey5}}>
                                        <Text style={styles.deliveryText}>Delivery</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                onPress={()=>{
                                    setDelivery(false)
                                }}
                                >
                                    <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.grey5:colors.buttons}}>
                                        <Text style={styles.deliveryText}>Pick Up</Text>
                                    </View>
                                </TouchableOpacity>
                        </View>
                </View>        
                    <View style={styles.filterView}>                   
                        <View style={styles.addressView}>
                           <View style={{flexDirection:"row", alignItems:"center", paddingLeft:10}}>
                               <Icon
                               type="material-community"
                               name="map-marker"
                               color={colors.grey1}
                               size={26}
                               />
                               <Text style={{margin:5}}>22 Bressie Street</Text>
                           </View>

                           <View style={styles.clockView}>
                               <Icon
                               type="material-community"
                               name="clock-time-four"
                               color={colors.grey1}
                               size={26}
                               />
                               <Text style={{margin:5}}>Now</Text>
                           </View>
                        </View>
                        <View>
                        <Icon
                            type="material-community"
                            name="tune"
                            color={colors.grey1}
                            size={26}
                        />
                        </View>
                    </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Categories</Text>
                </View>

                <View>
                   <FlatList
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                   data={filterData}
                   keyExtractor={item=>item.id}
                   extraData={indexCheck}
                   renderItem={({item, index})=>(
                       <Pressable
                       onPress={()=>{setIndexCheck(item.id)}}
                       >
                           <View style={indexCheck ===item.id? {...styles.smallCardSelected}:{...styles.smallCard}}>
                              <Image
                                style={{height:60, width:60, borderRadius:30}}
                                source={item.image}
                              />
                              <View>
                                  <Text style={indexCheck===item.id?{...styles.smallCardTextSelected}:{...styles.smallCardTextNotSelected}}>{item.name}</Text>
                              </View>
                           </View>
                       </Pressable>
                   )}
                   />
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Free delivery now</Text>
                </View>
                 <View style={{flexDirection:"row", marginTop:5}}>
                    <Text style={{marginLeft:15, fontSize:16, fontWeight:"bold", marginTop:10, marginRight:5}}>Options changing in</Text>
                    <CountDown
                    until={1000}
                    size={14}
                    digitStyle={{backgroundColor:colors.lightgreen}}
                    digittextStyle={{color:colors.Cardbackgroun}}
                    timeToShow={['M', 'S']}
                    timeLabels={{m:'Min', s:'Sec'}}
                    />
                 </View>

                 <View>
                    <FlatList
                    style={{marginTop:10, marginBottom:10}}
                    horizontal={true}
                    data={restaurantData}
                    keyExtractor={(item, index)=>index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=>(
                        <View style={{marginRight:5}}>
                            <FoodCard
                            screenWidth={SCREEN_WIDTH*0.8}
                            images={item.images}
                            restaurantName={item.restaurantName}
                            FarAway={item.farAway}
                            bussinessAddress={item.businessAddress}
                            averageReview={item.averageReview}
                            numberOfReview={item.numberOfReview}
                            />
                        </View>
                    )}
                    />  
                 </View>

                 <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Promotions available</Text>
                </View>
                 <View>
                    <FlatList
                    style={{marginTop:10, marginBottom:10}}
                    horizontal={true}
                    data={restaurantData}
                    keyExtractor={(item, index)=>index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=>(
                        <View style={{marginRight:5}}>
                            <FoodCard
                            screenWidth={SCREEN_WIDTH*0.8}
                            images={item.images}
                            restaurantName={item.restaurantName}
                            FarAway={item.farAway}
                            bussinessAddress={item.businessAddress}
                            averageReview={item.averageReview}
                            numberOfReview={item.numberOfReview}
                            />
                        </View>
                    )}
                    /> 

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Reataurants in your area</Text>
                </View> 
                 </View>

                 <View style={{width:SCREEN_WIDTH, padding:10}}>
                     {
                           restaurantData.map(item=>(
                               <View key={item.id} style={{paddingBottom:20}}>
                                 <FoodCard
                                    screenWidth={SCREEN_WIDTH*0.9}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    FarAway={item.farAway}
                                    bussinessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReview}
                                    />
                               </View>
                           ))
                     }
                 </View>
           </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    deliveryButton:{
        paddingHorizontal:20,
        borderRadius:25,
        paddingVertical:5
    },
    deliveryText:{
        marginLeft:5,
        fontSize:16
    },
    filterView:{
    flexDirection:"row", 
    alignItems:"center", 
    justifyContent:"space-evenly",
    marginHorizontal:10,
    marginVertical:10
    },
    clockView:{flexDirection:"row", 
    alignItems:"center", marginLeft:20, 
    backgroundColor:colors.Cardbackgroun,
    borderRadius:15,
    paddingHorizontal:5,
    marginRight:20
},

addressView:
{
    flexDirection:"row", 
    backgroundColor:colors.grey5, 
    borderRadius:15, 
    paddingVertical:5,
    justifyContent:"space-between",
    paddingHorizontal:20
},
headerText:{
    color:colors.grey2,
    fontSize:24,
    fontWeight:"bold",
    paddingLeft:10
},
headerTextView:{
    backgroundColor:colors.grey5,
    paddingVertical:2,
},
smallCard:{
    borderRadius:20,
    backgroundColor:colors.grey5,
    justifyContent: 'center',
    alignItems:'center',
    padding:5,
    width:80,
    margin:10,
    height:100
},
smallCardSelected:{
    borderRadius:20,
    backgroundColor:colors.buttons,
    justifyContent: 'center',
    alignItems:'center',
    padding:5,
    width:80,
    margin:10,
    height:100,
},
smallCardTextSelected:{
    fontWeight:"bold",
    color:colors.Cardbackgroun,
},
smallCardTextNotSelected:{
    fontWeight:"bold",
    color:colors.grey2,
}
})

export default HomeScreen;