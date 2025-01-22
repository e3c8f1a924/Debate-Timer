import { Button, ButtonGroup, ButtonOr, Container, Grid, GridColumn, Header, Icon } from "semantic-ui-react";
import styles from './Home.module.css';

function Home() {
    return (<>
        <Container className={styles.container}>
            <Header as='h1' className={styles.header}>Debate Timer</Header>
            <Header as='h2' className={styles.subheader}>一个简易的辩论赛记录器</Header>
            <Grid columns={2} className={styles.contentgrid}>
                <GridColumn>
                    <Header as='h3' className={styles.gridtitle}>最近项目</Header>
                </GridColumn>
                <GridColumn>
                    <Header as='h3' className={styles.gridtitle}>开始</Header>
                    <ButtonGroup>
                        <Button className={styles.gridbutton} onClick={() => window.electronAPI.openFile()}>
                            <Icon name="folder open outline" className={styles.gridbuttonicon} size="huge"/>
                            打开
                        </Button>
                        <ButtonOr text={'或'} className={styles.gridbuttonor}/>
                        <Button className={styles.gridbutton}>
                            <Icon name="add" className={styles.gridbuttonicon} size="huge"/>
                            新建
                        </Button>
                    </ButtonGroup>
                </GridColumn>
            </Grid>
        </Container>
    </>);
}
export default Home;