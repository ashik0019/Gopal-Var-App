import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class About extends Component {
    render() {
        return (
            <ScrollView style={{flex: 1, }}>
                <Text style={styles.title}> গল্পের নায়কদের সম্পর্কে কিছু কথা   </Text>
                <View style={styles.aboutCard}>
                    <Text style={styles.educationTitle}>গোপাল ভাঁড় সম্পর্কে : </Text>
                    <Text>
                        গোপাল ভাঁড় চরিত্রটি ঐতিহাসিক, গবেষক ও ভাষাবিদদের কাছে বিতর্কের বিষয় বহুকাল থেকে। গোপালের গল্পগুলি সমাজে 
                        চুড়ান্ত জনপ্রিয় ও বহুল প্রচলিত হলেও গোপাল ভাঁড় বাস্তবে ছিলেন কিনা সে নিয়ে মতভেদ আছে। অনেকেই মনে করেন 
                        গোপাল ভাঁড় নামে কেউ নির্দিষ্ট করে ছিলেননা। তবে কোনো না কোনো বিদূষক রাজার প্রিয়পাত্র হন। সেরকম গোপাল নাম্নী 
                        নাপিত বংশীয় কোনো ব্যক্তি ছিলেন। গোপালের জন্ম কত বঙ্গাব্দে তা কোথাও লেখা নেই। তার জন্মস্থানের পক্ষেও কোনো নথি 
                        নেই, কৃষ্ণনগরের বাসিন্দা হিসেবে তার সম্পত্তির কিংবা জায়গা-জমির কোনো প্রমাণ পাওয়া যায় না। গোপালের বাবার নাম 
                        জানা গেলেও তার মা ও স্ত্রী সম্পর্কে কিছু জানা যায়নি। নগেন্দ্রনাথ দাসের মতে গোপালের পদবী ছিল 'নাই'। 
                        মহারাজ তাকে হাস্যার্ণব উপাধী দান করেন। প্রখ্যাত ঐতিহাসিক ও ভাষাবিদ সুকুমার সেন বলেছেন ‘গোপাল ভাঁড় সম্পর্কে 
                        আধুনিক বাঙালির কৌতুহল থাকার ফলে বাস্তব অথবা কল্পিত ব্যক্তিটির সম্পর্কে যে জনশ্রুতি জাতীয় ঐতিহ্য গজিয়ে উঠেছে ও 
                        উঠছে তার বীজ হচ্ছে ভাঁড় নামের অংশটি, গোপাল ভাঁড়ের ভাঁড়টুকু সংস্কৃত শব্দ ভাণ্ডারের ‘ভাণ্ড’-জাত মনে করে অনেক 
                        গোপালের জাতি নির্ণয় করেছেন। পক্ষের ও বিপক্ষের যুক্তি যাই হোক, গোপাল ভাঁড় বাঙালি রসিক ও লৌকিক সংস্কৃতিতে 
                        অমলিন হয়ে আছেন। 
                    </Text>
                </View>
                <View style={styles.aboutCard}>
                    <Text style={styles.educationTitle}>রাজা কৃষ্ণচন্দ্রের সম্পর্কে : </Text>
                    <Text>
                        রাজা কৃষ্ণচন্দ্রের দরবারে রাজবৈদ্য নিয়োগ দেওয়া হবে। দেশদেশান্তর থেকে চিকিত্সকেরা এলেন যোগ দিতে। গোপালকে
                        জা দায়িত্ব দিলেন চিকিত্সক নির্বাচনের। গোপাল খুশিমনে বসলেন তাঁদের মেধা পরীক্ষায়।
                         —আপনার চিকিত্সালয়ের আশপাশে ভূতের উপদ্রব আছে? —জি আছে। প্রচুর ভূত। ওদের অত্যাচারে ঠিকমতো চিকিত্সা 
                         পর্যন্ত করতে পারি না। দিন দিন ওদের সংখ্যা বাড়ছেই। এবার দ্বিতীয় চিকিত্সকের পালা। —আপনার চিকিত্সালয়ের 
                         আশপাশে ভূতের উপদ্রব কেমন? —আশ্চর্য, আপনি জানলেন কীভাবে! ওদের জ্বালায় আমি অস্থির। দিন দিন ওদের সংখ্যা
                          বাড়ছেই। এভাবে দেখা গেল সবার চিকিত্সালয়ের আশপাশেই ভূতের উপদ্রব আছে। একজনকে শুধু পাওয়া গেল ,
                           যাঁর কোনো ভূতসংক্রান্ত ঝামেলা নেই। গোপাল তাঁকে রাজবৈদ্য নিয়োগ দিলেন। পরে দেখা গেল এই চিকিত্সকই সেরা।
                            রাজাও খুশি। একদিন রাজা ধরলেন গোপালকে। গোপাল বললেন , ‘আজ্ঞে মহারাজ, দেখুন, সবার চিকিত্সাকেন্দ্রের 
                            আশপাশে ভূতের উপদ্রব শুধু বাড়ছে আর বাড়ছে। এর অর্থ হলো , তাঁদের রোগী মরে আর ভূতের সংখ্যা বাড়ে…আর 
                            যাঁকে নিলাম, তাঁর ওখানে কোনো ভূতের উপদ্রব নেই…অর্থাত্ তাঁর রোগীএকজনও মরে না।
                    </Text>
                </View>
                <View style={styles.aboutCard}>
                    <Text style={styles.educationTitle}>মন্ত্রীকে নিয়ে কিছু কথা : </Text>
                    <Text>
                        গোপালের তখন বয়স হয়েছে। চোখে ভালো দেখতে পারে না। রাজা কৃষ্ণচন্দ্র বললেন , কী গোপাল, গতকাল আসনি 
                        কেন? —আজ্ঞে চোখে সমস্যা হয়েছে। সবকিছু দুটো দেখি। কাল এসেছিলাম। এসে দেখি দুটো দরবার। কোনটায় ঢুকব, 
                        ভাবতে ভাবতেই…। —এ তো তোমার জন্য ভালোই হলো। তুমি বড়লোক হয়ে গেলে। আগে দেখতে তোমার একটা বলদ , 
                        এখন দেখবে দুটো বলদ। —ঠিকই বলেছেন মহারাজ। আগে দেখতাম আপনার দুটো পা, এখন দেখছি চারটা পা…ঠিক আমার 
                        বলদের মতোই !
                    </Text>
                </View>
               
               
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20, 
        margin: 10,
        backgroundColor: '#b8b8b8', 
        padding: 10, 
        borderRadius: 10,
        color: 'white'
    }, 
    aboutCard: {
        margin: 10, 
        borderColor: '#b1b1b1', 
        borderWidth: 1, 
        borderRadius: 7, padding: 10, 
        elevation: 2
    },
    educationTitle: {
        fontSize: 18, 
        borderWidth: 1, 
        borderColor: '#ddd',
        padding: 5, 
        borderRadius: 3,
        backgroundColor: '#ddd'
    }
   
})