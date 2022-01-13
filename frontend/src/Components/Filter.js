import React, { useState, useEffect } from "react";

import {  Chip,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Slider,
    TextField,Tooltip,Typography,Autocomplete,
    Button} from '@mui/material';

import countryList from "./assets/country.json";
import roleData from "./assets/fakeRole.json";
import skillSetData from "./assets/programmingLanguage.json";
import Sidebar from "./Sidebar";
import Talent from "./Dashboard";
import useStyles from "./styles/TalentPoolStyle";
export default function TalentPools(props) {
  const classes = useStyles();
  const { window } = props;

  //  data for filter start
  const jobStatusData = [
    "Actively looking for a job",
    "Have a job, but open to offers ",
    "Looking for a job later",
  ];
  const employmentTypeData = [
    "Permanent (Full Time)",
    "Part Time",
    "Contractual",
  ];
  const englishProficiency = ["Beginner", "Junior", "Mid Level", "Senior"];
  //  data for filter end

  // filter section start

  // for role
  const [allRole, setAllRole] = useState([]);
  const [talents,setTalents] =useState([])
  let allRoleData = [];
  roleData.map((r) => allRoleData.push(...r.roles));
  useEffect(() => {
    setAllRole(allRoleData);
  }, []);
  const [roleValue, setRoleValue] = useState([]);

  // for skills
  const [skillSet, setSkillSet] = useState(skillSetData);
  const [skillValue, setSkillValue] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const handleSkillChange = (e) => {
    if (e.target.value.length > 2) {
      setFilteredSkills(
        skillSet.filter((data) =>
          data.toLowerCase().startsWith(e.target.value.toLowerCase())
        )
      );
      console.log(filteredSkills);
    } else {
      setFilteredSkills([]);
    }
  };

  // for Years of experience
  const [experience, setExperience] = useState([0, 1]);

  // for Expected Salary
  const [expectedSalary, setExpectedSalary] = useState([10000, 100000]);

  // for job seeking status
  const [jobStatus, setJobStatus] = useState([]);

  // for Employement Type
  const [employmentType, setEmploymentType] = useState([]);

  // for Developer Location
  const optionForLocation = [];
  const [allLocation, setAllLocation] = useState(countryList);
  const [location, setLocation] = useState([]);

  // for Relocate Canada
  const [isRelocation, setRelocate] = useState(true);

  // for English Proficiency
  const [
    englishProficiencyLevelData,
    setEnglishProficiencyLevelData,
  ] = useState([]);

  // for data gather in an object
  const [filter, setFilter] = useState({
    roleValue: [],
    skillValue: [],
    experience: [],
    expectedSalary: [],
    jobStatus: [],
    employmentType: [],
    location: [],
    isRelocation: [],
    englishProficiencyLevelData: [],
  });

  useEffect(() => {
    setFilter({
      roleValue,
      skillValue,
      experience,
      expectedSalary,
      jobStatus,
      employmentType,
      location,
      isRelocation,
      englishProficiencyLevelData,
    });
  }, [
    roleValue,
    skillValue,
    experience,
    expectedSalary,
    jobStatus,
    employmentType,
    location,
    isRelocation,
    englishProficiencyLevelData,
  ]);
 console.log("filtered skills",filter);

  // filter section end
  // for tooltip in expected salary slider end

  // for tooltip in expected salary slider
  function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
      <Tooltip
        open={open}
        enterTouchDelay={0}
        placement="top"
        title={value}
        style={{ color: "red" }}
      >
        {children}
      </Tooltip>
    );
  }
 
  return (
    <div className={classes.root}>
    <Sidebar page={2} />
    <main style={{ width: "100%" }}>
      <div className={classes.toolbar} />
      <Grid container spacing={0}>
        <Grid item md={3} xs={12} className={classes.filterContainer}>
          {/* filter component starts  */}
          <div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> 
            <Typography
              variant="h5"
              style={{
                borderBottom: " 1px solid rgba(0, 0, 0, 0.42)",
              }}
            >
              FILTER
            </Typography>
            <Button style={{color:'red'}} ><Typography> Search Talent </Typography></Button>
            </div>
            <div>
              <Typography variant="h6" className={classes.filterTitle}>
                Roles
              </Typography>
              <Autocomplete
                multiple
                value={roleValue}
                onChange={(event, newValue) => {
                  setRoleValue([...newValue]);
                }}
                options={allRole}
                getOptionLabel={(option) => option}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                    <Chip label={option} {...getTagProps({ index })} />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Role"
                    placeholder="Roles"
                  />
                )}
              />
              {/* skill  */}
              <Typography className={classes.filterTitle}>Skills</Typography>
              <Autocomplete
                multiple
                value={skillValue}
                className={classes.roleSelectField}
                onChange={(event, newValue) => {
                  setSkillValue([...newValue]);
                }}
                options={filteredSkills}
                getOptionLabel={(option) => option}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                    <Chip label={option} {...getTagProps({ index })} />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select skills"
                    placeholder="Type three or more letter to find"
                    onChange={handleSkillChange}
                  />
                )}
              />
              <Typography className={classes.filterTitle}>
                Years of experience
              </Typography>
              <Slider
                value={experience}
                onChange={(event, newValue) => {
                  setExperience(newValue);
                }}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={10}
              />
              <Chip label={`${experience[0]} - ${experience[1]}`} />

              {/* expected salary  */}
              <Typography className={classes.filterTitle}>
                Expected Salary
              </Typography>
              <div>
                <Slider
                  value={expectedSalary}
                  ValueLabelComponent={ValueLabelComponent}
                  stp={20000}
                  onChange={(event, newValue) => {
                    setExpectedSalary(newValue);
                  }}
                  valueLabelDisplay="auto"
                  min={0}
                  max={1000000}
                />
              </div>
              <div>
                <Chip
                  label={`${expectedSalary[0]} CAD - ${expectedSalary[1]} CAD`}
                />
              </div>
              <Typography className={classes.filterTitle}>
                Job Seeking Status
              </Typography>

              <Autocomplete
                multiple
                id="fixed-tags-demo"
                value={jobStatus}
                className={classes.roleSelectField}
                onChange={(event, newValue) => {
                  setJobStatus([...newValue]);
                }}
                options={jobStatusData}
                getOptionLabel={(option) => option}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                    <Chip label={option} {...getTagProps({ index })} />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Job Seeking Status"
                    placeholder="Job Seeking Status"
                  />
                )}
              />

              <Typography className={classes.filterTitle}>
                Employment Type
              </Typography>
              <Autocomplete
                multiple
                id="fixed-tags-demo"
                value={employmentType}
                className={classes.roleSelectField}
                onChange={(event, newValue) => {
                  setEmploymentType([...newValue]);
                }}
                options={employmentTypeData}
                getOptionLabel={(option) => option}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                    <Chip label={option} {...getTagProps({ index })} />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Employment Type"
                    placeholder="Employment Type"
                  />
                )}
              />

              <Typography className={classes.filterTitle}>
                Location
              </Typography>
              <Autocomplete
                multiple
                id="fixed-tags-demo"
                value={location}
                className={classes.roleSelectField}
                onChange={(event, newValue) => {
                  setLocation([
                    ...optionForLocation,
                    ...newValue.filter(
                      (option) => optionForLocation.indexOf(option) === -1
                    ),
                  ]);
                }}
                options={allLocation}
                getOptionLabel={(option) => option}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                    <Chip label={option} {...getTagProps({ index })} />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Location"
                    placeholder="Location"
                  />
                )}
              />
              <Typography className={classes.filterTitle}>
                Willing to Relocate to Canada
              </Typography>
              <RadioGroup
                aria-label="locate"
                name="locate"
                onChange={(event) => {
                  if (event.target.value == "true") {
                    setRelocate(true);
                  } else {
                    setRelocate(false);
                  }
                }}
              >
                <FormControlLabel
                  value={true}
                  control={
                    <Radio color="primary" checked={isRelocation && true} />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value={false}
                  control={
                    <Radio color="primary" checked={!isRelocation && true} />
                  }
                  label="No"
                />
              </RadioGroup>
              <Typography className={classes.filterTitle}>
                English Proficiency Level
              </Typography>

              <Autocomplete
                multiple
                id="fixed-tags-demo"
                value={englishProficiencyLevelData}
                className={classes.roleSelectFieldEnglishProficiency}
                onChange={(event, newValue) => {
                  setEnglishProficiencyLevelData([...newValue]);
                }}
                options={englishProficiency}
                getOptionLabel={(option) => option}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                    <Chip label={option} {...getTagProps({ index })} />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="English proficiency level"
                    placeholder="English proficiency level"
                  />
                )}
              />
            </div>
          </div>
          {/* filter component ends  */}
        </Grid>
        <Grid item md={8} xs={12} style={{ marginLeft: "auto" }}>
          <div className={classes.searchDiv}>
            <Typography className={classes.filterTitle}>
              Search by word
            </Typography>
            <TextField
              label="Search"
              variant="outlined"
              // onChange={(e) => setMaxSalary(e.target.value)}
              name="search"
              style={{ width: "100%", marginTop: "20px" }}
            />
          </div>
          <Grid container spacing={0} style={{ paddingLeft: "20px" }}>
            {[...Array(30)].map((e, i) => (
              <Talent key={i} count={i} />
            ))}
            {/* <Pagination count={10} color="primary" /> */}
          </Grid>
        </Grid>
      </Grid>
    </main>
  </div>
  );
}
