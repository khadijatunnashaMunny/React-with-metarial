import { makeStyles } from '@mui/styles';
export default makeStyles({
    root: {
        display: "flex",
      },
      cardBtn: {
        margin:'1%',
      },
      cardIcon: {
        fontSize: "24px",
        color: "#444",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          color: "#00765A",
        },
      },
      CardbtnGroup: {
        display: "flex",
        justifyContent: "center",
        height:"450px",
        alignItems: "center",
    
      },
      overlay: {
        position: "absolute",
        top: "0px",
        width: "100%",
        height: "500px",
        opacity: 0,
        transition: ".5s ease-in-out",
        backgroundColor: "rgba(0,0,0, 0.6)",
      },
      talentDetail: {
        width: "80%",
        margin: "auto",
        marginTop: '2%',
        paddingBottom: '2%',
        boxShadow: "1px 1px 5px #ccc",
        backgroundColor: "#F7F8FA",
      },
      talentSubHeading: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "14px",
      },
      talentHeading: {
        textAlign: "center",
      },
      talentImage: {
        width: "20%",
        height: "20%",
        borderRadius: "50%",
      },
      imageDiv: {
        justifyContent: "center",
        textAlign: "center",
        margin: "5%",
      },
      talentProfile: {
        height: "500px",
        position: "relative",
        margin: "5%",
        borderRadius: "6px",
        boxShadow: "1px 1px 5px #ccc",
        "&:hover $overlay": {
          opacity: 1,
        },
      },
      searchDiv: {
        padding: "2%",
      },
      filterTitle: {
        fontSize: "18px",
        fontWeight: "bold",
        marginTop: "20px",
      },
      cardContainer: {
        padding: "8px",
      },
      card: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fff",
        boxShadow: "  0px 1px 5px #EEEEEE",
        height: "100%",
      },
      talentImageSection: {
        textAlign: "center",
        height: 110,
        padding: 10,
        backgroundImage:
          "linear-gradient(221.44deg, #1AB09D 76.05%, #81DCD1 113.29%)",
      },
      talentImage: {
        cursor: "pointer",
        width: "150px !important",
        height: "150px !important",
        borderRadius: "50%",
        margin: 0,
        boxShadow:
          "rgba(0, 0, 0, 0.17) 0px - 23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px - 36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px - 79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
      },
      talentName: {
        cursor: "pointer",
      },
      position: {
        borderBottom: "1px solid #1ab09d",
        paddingBottom: 5,
        fontWeight: 700,
      },
      infoContainer: {
        marginTop: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
      },
    
      infoList: {
        marginTop: 5,
      },
      AS_alignCenter: {
        display: "flex",
        alignItems: "center",
      },
      listIcon: {
        marginRight: 10,
      },
    
      cardFooter: {
        height: "40px",
        display: "grid",
        gridTemplateColumns: "1fr 2fr 2fr",
      },
      cardFooterIconHeart: {
        color: "#fff",
        backgroundColor: "#DC3545",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        cursor: "pointer",
        transition:
          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    
        "&:hover": {
          color: "#dc3565",
          backgroundColor: "#fff",
          border: "1px solid #dc3565",
        },
      },
      cardFooterIconPlus: {
        color: "#fff",
        backgroundColor: "#FAB70B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        cursor: "pointer",
        transition:
          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    
        "&:hover": {
          color: "#FAB70B",
          backgroundColor: "#fff",
          border: "1px solid #FAB70B",
        },
      },
      cardFooterIconHire: {
        color: "#fff",
        backgroundColor: "#1AB19E",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 28,
        cursor: "pointer",
        transition:
          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    
        "&:hover": {
          color: "#1AB19E",
          backgroundColor: "#fff",
          border: "1px solid #1AB19E",
        },
      },
});
