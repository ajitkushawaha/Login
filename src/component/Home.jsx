import React from 'react';
import { View, Text } from 'react-native';
import Home from './Home';
import Sidebar from './Sidebar';
import MainPage from './MainPage';
import Footer from './Footer.Jsx';

const Home = () => {
    return (
        <View>
            <View>
                <Home />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Sidebar />
                <MainPage />
            </View>
            <View>
                <Footer />
                <Text>Main Page - Footer</Text>
            </View>
        </View>
    );
};

export default Home;
