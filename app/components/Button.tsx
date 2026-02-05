import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
}) => {
  const containerStyle = [
    styles.base,
    styles[size],
    disabled && styles.disabled,
    style,
  ];
  
  const textStyle: TextStyle = {
    ...styles.text,
    ...styles[`text_${size}`],
    color: variant === 'outline' ? Colors.ctaBright : variant === 'primary' ? '#1A1A1A' : Colors.text,
  };
  
  if (variant === 'primary' && !disabled) {
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.8}>
        <LinearGradient
          colors={Colors.gradientCTA}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            containerStyle,
            {
              shadowColor: Colors.ctaBright,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 8,
            },
          ]}
        >
          <Text style={[textStyle, { color: '#1A1A1A' }]}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={[
        containerStyle,
        variant === 'secondary' && styles.secondary,
        variant === 'outline' && styles.outline,
      ]}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  medium: {
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  large: {
    paddingVertical: 18,
    paddingHorizontal: 32,
  },
  text: {
    fontWeight: '700',
    color: Colors.text,
  },
  text_small: {
    fontSize: 14,
  },
  text_medium: {
    fontSize: 16,
  },
  text_large: {
    fontSize: 18,
  },
  secondary: {
    backgroundColor: Colors.surfaceLight,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.ctaBright,
  },
  disabled: {
    opacity: 0.5,
  },
});
