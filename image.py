import streamlit as st
from PIL import Image
import pandas as pd
st.set_page_config(layout="wide")




#ダミーデータ作成
#指の長さ
Lfore1_2 = 0 #人差し指第一～第二の長さ
Lfore2_3 = 1 #人差し指第二～第三の長さ
Lfore3_t = 2 #人差し指第三～指先の長さ

Lmiddle1_2 = 3 #中指第一～第二の長さ
Lthird1_2 = 4 #薬指第一～第二の長さ
Llittle1_2 = 5 #小指第一～第二の長さ
Lthumb1_2 = 6 #親指第一～第二の長さ

Lmiddle_wrist =7 #中指付け根～手首の長さ
Lthumb_wrist = 8 #親指付け根から手首の長さ
Llittle_fore = 9 #小指付け根～人差し指付け根の長さ

#指の角度
Afore1_2 = 00 #人差し指第一～第二の角度
Afore2_3 = 10 #人差し指第二～第三の角度
Afore3_t = 20 #人差し指第三～指先の角度

Amiddle1_2 = 30
Athird1_2 = 40
Alittle1_2= 50
Athumb1_2 = 60

#コメント
part_1 = "親指"
adj_1 = "長い"

part_2 = "人差し指"
adj_2 = "やや長い"

#モデル選択ボタン
if st.button("モデルを選択"):
    st.write("") #ここにモデル選択に関する処理を入れる st.writeは消して大丈夫です

#ファイルアップロード部
col1, col2 = st.columns(2)
#正面用
with col1 :
    picture_front = st.file_uploader("正面の手の参照ファイルを選択",type=["jpg","jpeg","png"])
    if picture_front is not None:
        img = Image.open(picture_front)
        st.image(img, caption="正面")
with col2 :
    picture_side = st.file_uploader("側面の手の参照ファイルを選択",type=["jpg","jpeg","png"])
    if picture_side is not None:
        img = Image.open(picture_side)
        st.image(img, caption="側面")

#コメント作成・表示
with st.container(border = True):
    st.header("コメント")
    st.write(f"{part_1}が特に{adj_1}傾向にあります")
    st.write(f"{part_2}が特に{adj_2}傾向にあります")

#サイドバー
#フィードバック開始ボタン
if st.sidebar.button("フィードバック開始"):
    if picture_front is None and picture_side is None: #正面、側面の画像のどちらもアップロードされていないとき
        st.sidebar.write("ファイルが選択されていません")
    #ここにフィードバック開始の処理を入れる

#表作成
df = pd.DataFrame({
    '部位': ['人差し指', '第一～第二関節','第二～第三関節','第三関節～指先',
             '中指','第一～第二関節','第二～第三関節','第三関節～指先',
             '薬指','第一～第二関節','第二～第三関節','第三関節～指先',
             '小指','第一～第二関節','第二～第三関節','第三関節～指先',
             '親指','第一～第二関節','第二関節～指先',
             'その他','中指付け根～手首','親指付け根～手首','小指～人差し指付け根'],
    '長さ': ['', Lfore1_2, Lfore2_3, Lfore3_t, #一つ目は空欄
            '',Lmiddle1_2, '','',
            '',Lthird1_2, '','',
            '',Llittle1_2, '','',
            '',Lthumb1_2, '',
            '',Lmiddle_wrist, Lthumb_wrist, Llittle_fore,],
    '角度': ['', Afore1_2, Afore2_3, Afore3_t, #一つ目は空欄
            '',Amiddle1_2, '','',
            '',Athird1_2, '','',
            '',Alittle1_2, '','',
            '','','',
            '','','','',]
})

#表のサイドバー表示
st.sidebar.dataframe(df, height="stretch")

#ファイル保存ボタン表示
if st.sidebar.button("ファイルを保存"):
    st.sidebar.write("") #ここにファイル保存の処理を入れる