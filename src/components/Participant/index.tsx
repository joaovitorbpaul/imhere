import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface Props {
    name: string
    onRemove: () => void
}

export function Participant({ name, onRemove }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                { name }
            </Text>
            <TouchableOpacity style={styles.button} onPress={onRemove} activeOpacity={0.5}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}