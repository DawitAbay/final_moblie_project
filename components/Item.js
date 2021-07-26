import React, { useState } from 'react'
import { MotiView } from 'moti'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function useLayout() {
    const [layout, setLayout] = useState({ height: 0 })

    const onLayout = ({ nativeEvent }) => {
        setLayout(nativeEvent.layout)
    }

    return [layout, onLayout]
}

export default function Item({ color, cabecalho, children }) {

    const [{ height }, onLayout] = useLayout();

    const [open, setOpen] = useState(false);

    function toggle() {
        setOpen(!open);
    }

    return (
        <View style={styles.button}>
            <MotiView animate={{ height }}>
                <TouchableOpacity onPress={toggle} activeOpacity={100}>
                    <View
                        onLayout={onLayout}
                        style={{
                            height: open ? 300 : 100,
                            backgroundColor: color,
                            borderRadius: 20,

                        }}
                    >
                        <View style={styles.header}>
                            <Text style={styles.textHeader}>{cabecalho}</Text>
                            <Ionicons name={open ? 'arrow-up' : 'arrow-down'} size={24} color="white" />
                        </View>

                        <View style={{ display: open ? 'flex' : 'none' }}>
                            {children}
                        </View>

                    </View>
                </TouchableOpacity>
            </MotiView>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        marginVertical: 10,
        elevation: 10
    },
    header: {
        padding: 20,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textHeader: {
        color: '#fff',
        fontSize: 20,

    }
})