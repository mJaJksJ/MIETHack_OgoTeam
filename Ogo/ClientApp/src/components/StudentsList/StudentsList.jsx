import * as React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {visuallyHidden} from '@mui/utils';
import {styled} from '@mui/material/styles';
import {Button, Fab} from "@mui/material";
import AddStudentModal from "./AddStudentModal";
import {fetchStudentsShort} from "../../responses/help";
import {useEffect, useState} from "react";
import Loading from "../Loading";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import {Link} from "react-router-dom";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#4f96fe",
        color: theme.palette.common.white,
        fontSize: 16,
        fontWeight: 400,
        fontStyle: "bold"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;

}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'id',
        numeric: false,
        disablePadding: false,
        label: 'Номер карточки',
    },
    {
        id: 'fullName',
        numeric: false,
        disablePadding: false,
        label: 'Студент',
    },
    {
        id: 'number',
        numeric: false,
        disablePadding: false,
        label: 'Студ. билет',
    },
    {
        id: 'groupName',
        numeric: false,
        disablePadding: false,
        label: 'Группа',
    },
    {
        id: 'numberOfHousing',
        numeric: false,
        disablePadding: false,
        label: 'Корпус',
    },
    {
        id: 'numberOfRoom',
        numeric: false,
        disablePadding: false,
        label: 'Комната',
    },
    {
        id: 'edit',
        numeric: false,
        disablePadding: false,
        label: '',
    },
];

function EnhancedTableHead(props) {
    const {order, orderBy, onRequestSort} =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </StyledTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {

    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1}
            }}
        >
            <Typography
                sx={{flex: '1 1 100%'}}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Студенты
            </Typography>

        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function StudentsList() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = React.useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = () =>  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const [open, setOpen] = React.useState(false);

    const addStudent = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function loadStudent() {
        const data = await fetchStudentsShort();
        console.log(data);

        if(data){
            setIsLoading(false);
            setRows(data)
        }

    }

    useEffect(() => {
        loadStudent();
    }, [])

    return (
        <div>
            <Button style={{marginBottom: "15px"}} onClick={loadStudent}>Обновить</Button>
            <AddStudentModal open={open} close={handleClose}/>
            <Box sx={{width: '100%'}}>
                <Paper sx={{width: '100%', mb: 2}}>
                    {isLoading ? <Loading/>
                        : <div>
                            <TableContainer>
                                <Table
                                    sx={{minWidth: 750}}
                                    aria-labelledby="tableTitle"
                                    size={'small'}
                                >
                                    <EnhancedTableHead
                                        order={order}
                                        orderBy={orderBy}
                                        onRequestSort={handleRequestSort}
                                    />
                                    <TableBody>
                                        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                                        {stableSort(rows, getComparator(order, orderBy))
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row) => {
                                                return (
                                                    <TableRow
                                                        hover
                                                        tabIndex={-1}
                                                        key={row.id}
                                                    >
                                                        <StyledTableCell align="left">{row.id}</StyledTableCell>
                                                        <StyledTableCell align="left">{row.fullName}</StyledTableCell>
                                                        <StyledTableCell align="left">{row.number}</StyledTableCell>
                                                        <StyledTableCell align="left">{row.groupName}</StyledTableCell>
                                                        <StyledTableCell
                                                            align="left">{row.numberOfHousing}</StyledTableCell>
                                                        <StyledTableCell
                                                            align="left">{row.numberOfRoom}</StyledTableCell>
                                                        <StyledTableCell align="left">
                                                            <Button variant="outlined" component={Link} to={`/students/${row.id}`} >Подробнее</Button>
                                                        </StyledTableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        {emptyRows > 0 && (
                                            <TableRow
                                                style={{
                                                    height: 33 * emptyRows,
                                                }}
                                            >
                                                <TableCell colSpan={6}/>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </div>

                    }
                </Paper>
            </Box>
            <Fab onClick={addStudent} style={{position: "fixed", bottom: "5%", right: "2%"}} color="primary"
                 aria-label="add">
                <AddIcon/>
            </Fab>
        </div>
    );
}
