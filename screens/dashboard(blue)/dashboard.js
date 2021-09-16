import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './style'


function Dashboard() {
    return (

        <ScrollView style={styles.container}>
            <View style={styles.quickStart}>
                <View style={styles.profileCard}>
                    <View style={styles.rectangle11}>
                        <Text style={styles.giveMeMore} >Give me More</Text>
                        <Image style={styles.profilePic} source={require('../../assets/images/profile.jpg')} />
                        <Text style={styles.Name}>Ben Johnson</Text>
                        <Text style={styles.details}>Private M&A |Stockholm</Text>
                        <TouchableOpacity style={styles.editBtn} >
                            <Text style={styles.editBtnText}>Edit Status</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.profileCard2}>
                    <View style={styles.summary}>
                        <Text style={styles.summaryTxt}>Summary</Text>
                    </View>
                    <View style={styles.week}>
                        <View style={styles.column}>
                            <Text style={styles.previousWeek}>Previous Week</Text>
                            <Text style={styles.time}>0.0 hours</Text>
                        </View>
                        <View style={styles.column}>
                            <View style={styles.circle}>
                                <Text style={styles.textPercentage}>0.0%</Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.week}>
                        <View style={styles.column}>
                            <Text style={styles.previousWeek}>Current Week</Text>
                            <Text style={styles.time}>15.0 hours</Text>
                        </View>
                        <View style={styles.column}>
                            <View style={styles.circle}>
                                <Text style={styles.textPercentage}>37.5%</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.week}>
                        <View style={styles.column}>
                            <Text style={styles.previousWeek}>Previous Week</Text>
                            <Text style={styles.time}>5.0 hours</Text>
                        </View>
                        <View style={styles.column}>
                            <View style={styles.circle}>
                                <Text style={styles.textPercentage}>12.5%</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
            {/* <View>
                    <Text style={{ top: 190, left: 30, fontSize: 18, fontWeight: 'bold' }}>Estimated times</Text>
                </View>
                <View style={styles.estimatedTimes}>

                    <View style={{ display: 'flex', flexDirection: 'row', height: 60, borderBottomWidth: 1, borderColor: '#EBEBEB' }}>

                        <TouchableOpacity style={styles.btnCurrent}>
                            <Text style={styles.textCurrent}>Current Week</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNext}>
                            <Text style={styles.textNext}>Next Week</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.matterContainer} >
                        <Text style={styles.content}>No Matters Added</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>

                        <TouchableOpacity style={styles.add}>
                            <Text style={styles.addText}>Add</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.save}>
                            <Text style={styles.saveText}>Save</Text>

                        </TouchableOpacity>
                    </View>
                </View>  */}

        </ScrollView>

    )

}
export default Dashboard