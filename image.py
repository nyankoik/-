import streamlit as st
from PIL import Image
import pandas as pd

#変数
t_high = 390 #表の高さ

#ダミーデータ作成
#指の長さ
Lfore1_2 = 20 #人差し指第一～第二の長さ
Lfore2_3 = 0 #人差し指第二～第三の長さ
Lfore3_t = 1 #人差し指第三～指先の長さ

#指の角度
Afore1_2 = 30 #人差し指第一～第二の角度
Afore2_3 = 40 #人差し指第二～第三の角度
Afore3_t = 50 #人差し指第三～指先の角度

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
             'その他','中指付け根～手首','中指付け根～手首','小指～人差し指付け根'],
    '長さ': ['', Lfore1_2, Lfore2_3, Lfore3_t, #一つ目は空欄
            '','','','',
            '','','','',
            '','','','',
            '','','',
            '','','','',],
    '角度': ['', Afore1_2, Afore2_3, Afore3_t, #一つ目は空欄
            '','','','',
            '','','','',
            '','','','',
            '','','',
            '','','','',]
})

#表のサイドバー表示
st.sidebar.dataframe(df, height=t_high)

#ファイル保存ボタン表示
if st.sidebar.button("ファイルを保存"):
    st.sidebar.write("") #ここにファイル保存の処理を入れる