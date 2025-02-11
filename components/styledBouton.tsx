import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function StyledButton({ title, onPress }: { title: string, onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50', // Couleur de fond (vert)
    paddingVertical: 15,        // Espace vertical à l'intérieur du bouton
    paddingHorizontal: 30,      // Espace horizontal à l'intérieur du bouton
    borderRadius: 25,           // Coins arrondis
    alignItems: 'center',       // Centre le texte horizontalement
    shadowColor: '#000',        // Couleur de l'ombre (noire)
    shadowOffset: { width: 0, height: 2 }, // Décalage de l'ombre
    shadowOpacity: 0.3,         // Opacité de l'ombre
    shadowRadius: 4,            // Rayon de flou de l'ombre
    elevation: 5,               // Ajoute une ombre pour Android
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',              // Couleur du texte (blanc)
    fontSize: 18,               // Taille de la police
    fontWeight: 'bold',         // Texte en gras
  },
});
