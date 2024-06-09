from PIL import Image
import os

# Obtener el directorio actual
current_dir = os.getcwd()
input_folder = os.path.join(current_dir, '1cac')
output_folder = os.path.join(current_dir, '1cac/reducidas')

# Crear la carpeta de salida si no existe
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Ancho deseado (en píxeles)
desired_width = 800
# Calidad deseada (valor entre 0 y 100, donde 100 es la mejor calidad)
desired_quality = 85

for filename in os.listdir(input_folder):
    if filename.endswith(".jpg") or filename.endswith(".jpeg"):
        img_path = os.path.join(input_folder, filename)
        img = Image.open(img_path)
        
        # Calcular la altura basada en la proporción del original
        width, height = img.size
        aspect_ratio = float(width) / height
        desired_height = int(desired_width / aspect_ratio)
        
        # Redimensionar la imagen
        img = img.resize((desired_width, desired_height), Image.ANTIALIAS)
        
        # Guardar la imagen con la calidad reducida
        output_path = os.path.join(output_folder, filename)
        img.save(output_path, 'JPEG', quality=desired_quality)

        print(f'Processed {filename}')
