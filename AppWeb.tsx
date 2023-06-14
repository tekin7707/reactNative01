import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OnePage from './src/one';
import TwoPage from './src/two';

export default function AppWeb() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnePage />} />
        <Route path="/two" element={<TwoPage />} />
      </Routes>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
