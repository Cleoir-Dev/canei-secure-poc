# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Uncomment this to preserve the line number information for
# debugging stack traces.
#-keepattributes SourceFile,LineNumberTable

# If you keep the line number information, uncomment this to
# hide the original source file name.
#-renamesourcefileattribute SourceFile
# Criptografia: javax.crypto e java.security (evita crashes por remoção de classes essenciais)
-keep class javax.crypto.** { *; }
-dontwarn javax.crypto.**

-keep class java.security.** { *; }
-dontwarn java.security.**

# Keystore / KeyGenParameterSpec / Cipher etc
-keep class android.security.** { *; }
-dontwarn android.security.**

# Se usar alguma classe do AndroidX relacionada a segurança (p.ex. EncryptedSharedPreferences)
-keep class androidx.security.** { *; }
-dontwarn androidx.security.**

# Capacitor bridge - importante manter os métodos JS expostos
-keepclasseswithmembernames class * {
    @com.getcapacitor.PluginMethod <methods>;
}

# Se você usar anotação @CapacitorPlugin (muito comum nos plugins)
-keepclasseswithmembernames class * {
    @com.getcapacitor.annotation.CapacitorPlugin <methods>;
}
