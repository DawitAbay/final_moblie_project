import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TextInput,
    StatusBar,
} from 'react-native';

import CoinItem from './CoinItem';

const AppCry = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    const loadData = async () => {
        const res = await fetch(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false'
        );
        const data = await res.json();
        setCoins(data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#141414" />

            <View style={styles.header}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search a Coin"
                    placeholderTextColor="white"
                    onChangeText={(text) => text && setSearch(text)}
                />
            </View>

            <FlatList
                style={styles.list}
                data={coins.filter(
                    (coin) =>
                        coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
                        coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                )}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <CoinItem coin={item} />}
                refreshing={refreshing}
                onRefresh={async () => {
                    setRefreshing(true);
                    await loadData();
                    setRefreshing(false);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242C40',
        alignItems: 'center',
        flex: 1,
    },
    list: {
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        height: '10%',
        marginBottom: -30,
        color: 'gray',
    },
    searchInput: {
        color: 'white',
        borderBottomColor: '#4657CE',
        borderBottomWidth: 1,
        width: '100%',
        height: '50%',
        textAlign: 'center',
    },
});

export default AppCry;