import pandas as pd

df = pd.read_csv('periodistas-amenazadas.csv')

##############################################
############ AUTOR DE LA VIOLENCIA ###########
##############################################
"""
Reutilizamos la tabla hecha por FOPEA
"""

##############################################
############ MOMENTOS DE VIOLENCIA ###########
##############################################
momentos = df.copy()

momentos = momentos.rename(columns={
    '2.3.2. ¿En qué momento experimentó esta violencia?': 'Psicológica',
    '2.4.2. ¿En qué momento experimentó esta violencia?': "Física",
    '2.5.2. ¿En qué momento experimentó esta violencia?': "Económica",
    '2.6.2. ¿En qué momento experimentó esta violencia?': "Sexual",
    '2.7.2. ¿En qué momento experimentó esta violencia?': "Laboral",
    '2.8.2.  ¿En qué momento experimentó esta violencia?': "Institucional",
    '2.9.2. ¿En qué momento experimentó esta violencia?': "En línea",
    })
momentos = momentos[['Psicológica', 'Física', 'Económica', 'Sexual', 'Laboral', 'Institucional', 'En línea']]



df_melted = momentos.melt(var_name='Tipo de violencia', value_name='Momento')

# Contar las apariciones agrupando por `Momento` y `Tipo de violencia`
momentos_final = df_melted.groupby(['Momento', 'Tipo de violencia']).size().unstack(fill_value=0)

# Mostrar el resultado
momentos_final.to_csv("violencias/momentos.csv")



##############################################
######### IMPACTO DE LAS VIOLENCIAS ##########
##############################################

impacto = df.copy()

impacto = impacto.rename(columns={
    '3.2. Si atravesó algunas de las violencias nombradas, ¿en qué ámbitos impactaron esos hechos?': 'Impacto',
    '2.3.1. A continuación, se pregunta sobre SI USTED ha experimentado alguna de las siguientes violencias. Violencia psicológica: amenazas, intimidación, insultos, acoso y difamación por ser mujer periodista.': "Psicológica",
    '2.4.1. ¿Fue violentada físicamente de alguna manera (empujones, agarrones, torcido el brazo, tironeado del cabello, u otros golpes) por ser mujer periodista?': "Física",
    '2.5.1. ¿USTED ha experimentado Violencia económica? Refiere a privación de recursos económicos, discriminación salarial y el sabotaje de su carrera profesional como periodista.': "Económica",
    '2.6.1.  ¿Fue hostigada o agredida sexualmente (incluyendo insinuaciones o toqueteos inapropiados) en el ejercicio de la profesión?' : "Sexual",
    '2.7.1.  ¿Han impedido el ejercicio de sus responsabilidades laborales como periodista por encontrarse en estado de embarazo, parto o puerperio?': "Laboral",
    '2.8.1.  ¿Sufrió violencia institucional como censura, presión para renunciar a su cargo u hostigamiento por parte de las autoridades?    ': "Institucional",
    '2.9.1.  ¿Sufrió violencia en línea (a través de Internet) tal como acoso, amenazas de violencia, doxxing -revelar información identificatoria- y la difusión de información falsa o engañosa por su tarea periodística?': "En línea",
})
impacto = impacto[['Psicológica', 'Física', 'Económica', 'Sexual', 'Laboral', 'Institucional', 'En línea', 'Impacto']]


print(impacto['Impacto'].value_counts())

impacto.to_csv("violencias/impacto.csv")