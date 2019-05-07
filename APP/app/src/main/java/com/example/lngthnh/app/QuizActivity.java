package com.example.lngthnh.app;

import java.lang.String;
import android.content.DialogInterface;
import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.res.ColorStateList;
import android.graphics.Color;
import android.os.CountDownTimer;
import android.sax.StartElementListener;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.example.lngthnh.app.Common.Common;
import com.example.lngthnh.app.Model.Question;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.squareup.picasso.Picasso;

import org.w3c.dom.Text;

import java.util.List;
import java.util.Locale;

public class QuizActivity extends AppCompatActivity implements View.OnClickListener {
    //playing
    final static long INTERVAL = 1000; //1sec
    final static long TIMEOUT = 20000; //7sec
    int progressValue = 0;

    CountDownTimer mCountDown;

    int index=0;
    int score = 0;
    int thisQuestion=0;
    int totalQuestion;
    int correctAnswer;



    //Firebase
    /*FirebaseDatabase database;
    DatabaseReference question;*/
    ProgressBar progressBar;
    ImageView question_image;
    private RadioGroup rbGroup;
    //private List<Question> questionList;
    private RadioButton btnA;
    private RadioButton btnB;
    private RadioButton btnC;
    private RadioButton btnD;
    RadioButton rb1;
    RadioButton rb2;
    RadioButton rb3;
    RadioButton rb4;
//    Button btnA;
//    Button btnB;
//    Button btnC;
//    Button btnD;
    private int questionCounter;
    private int questionCountTotal;
    private Question currentQuestion;
    private Button buttonConfirmNext;
    /*Button btnA, btnB, btnC,btnD ;*/
    TextView txtScore, txtQuestionNum, question_text; //playing

    private static final long COUNTDOWN_IN_MILLIS = 20000;

    private TextView textViewCountDown;

    private ColorStateList textColorDefaultCd;

    private CountDownTimer countDownTimer;
    private long timeLeftInMillis;
    private  boolean answered;
    @SuppressLint("WrongViewCast")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_quiz);
        //playing
        //firebase
        /*database = FirebaseDatabase.getInstance();
        question = database.getReference("Question");*/
        //View
        txtScore = (TextView)findViewById(R.id.txtScore);
        txtQuestionNum = (TextView)findViewById(R.id.txtTotalQuestion);
        question_text = (TextView)findViewById(R.id.question_text);
        question_image = (ImageView)findViewById(R.id.question_image);
        progressBar = (ProgressBar)findViewById(R.id.progressBar);

        rbGroup = findViewById(R.id.radio_group);
        btnA = (RadioButton)findViewById(R.id.btnAnswerA);
        btnB = (RadioButton)findViewById(R.id.btnAnswerB);
        btnC = (RadioButton)findViewById(R.id.btnAnswerC);
        btnD = (RadioButton)findViewById(R.id.btnAnswerD);


        buttonConfirmNext = findViewById(R.id.button_confirm_next);
        textColorDefaultCd = btnA.getTextColors();
        /*RadioGroup group =(RadioGroup) findViewById(R.id.radio_group);
        int idChecked =  group.getCheckedRadioButtonId();
        switch(idChecked){
            case R.id.btnAnswerA:
                break;
            case R.id.btnAnswerB:
                break;
            case R.id.btnAnswerC:
                break;
            case R.id.btnAnswerD:
                break;
        }*/

        textViewCountDown = findViewById(R.id.text_view_countdown);
        textColorDefaultCd = textViewCountDown.getHintTextColors();
//        showQuestion(++index);
        buttonConfirmNext.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if( !answered) {
                    if (btnA.isChecked() || btnB.isChecked() || btnC.isChecked() || btnD.isChecked()) {
//                        showQuestion(++index);
                        checkAnswer();
                    } else {
                        Toast.makeText(QuizActivity.this, "Lam on chon cau hoi", Toast.LENGTH_SHORT).show();
                    }
                } else {
                    showQuestion(++index);
                }
            }
        });
    }

    private  void checkAnswer(){
        answered = true;

        RadioButton rbSelected = findViewById(rbGroup.getCheckedRadioButtonId());
        String answerNr = String.valueOf(rbGroup.indexOfChild(rbSelected));
//        String answerNr = rbSelected.getText().toString();


        if(answerNr.equals(Common.questionList.get(index).getCorrectAnswer())){
            score++;
            correctAnswer++;
            showQuestion(++index);
        }
    }

    private void addListenerRadioButton()
    {
        rbGroup = findViewById(R.id.radio_group);
        btnA = (RadioButton)findViewById(R.id.btnAnswerA);
        btnB = (RadioButton)findViewById(R.id.btnAnswerB);
        btnC = (RadioButton)findViewById(R.id.btnAnswerC);
        btnD = (RadioButton)findViewById(R.id.btnAnswerD);
        btnA.setOnClickListener(new View.OnClickListener()
        {

            @Override
            public void onClick(View v)
            {
                int selected=rbGroup.getCheckedRadioButtonId();
                rb1=(RadioButton)findViewById(selected);
                Toast.makeText(QuizActivity.this,rb1.getText(),Toast.LENGTH_LONG).show();
            }
        });
        btnB.setOnClickListener(new View.OnClickListener()
        {

            @Override
            public void onClick(View v)
            {
                int selected=rbGroup.getCheckedRadioButtonId();
                rb1=(RadioButton)findViewById(selected);
                Toast.makeText(QuizActivity.this,rb1.getText(),Toast.LENGTH_LONG).show();
            }
        });
        btnC.setOnClickListener(new View.OnClickListener()
        {

            @Override
            public void onClick(View v)
            {
                int selected=rbGroup.getCheckedRadioButtonId();
                rb1=(RadioButton)findViewById(selected);
                Toast.makeText(QuizActivity.this,rb1.getText(),Toast.LENGTH_LONG).show();
            }
        });
        btnD.setOnClickListener(new View.OnClickListener()
        {

            @Override
            public void onClick(View v)
            {
                int selected=rbGroup.getCheckedRadioButtonId();
                rb1=(RadioButton)findViewById(selected);
                Toast.makeText(QuizActivity.this,rb1.getText(),Toast.LENGTH_LONG).show();
            }
        });
    }


    public void onClick(View view) {
        RadioGroup group =(RadioGroup) findViewById(R.id.radio_group);
        int selectedId =  group.getCheckedRadioButtonId();
        RadioButton button=(RadioButton)findViewById(selectedId);
        Toast.makeText(QuizActivity.this,button.getText(),Toast.LENGTH_SHORT).show();
        countDownTimer.cancel();
        mCountDown.cancel();
        if (index < totalQuestion) //still have question in list
        {
            /*btnA = (RadioButton)findViewById(R.id.btnAnswerA);
            String getIDA = String.valueOf(btnA.getId());*/
            /*RadioButton rbSelected = findViewById(rbGroup.getCheckedRadioButtonId());
            int  answerNr = rbGroup.indexOfChild(rbSelected) +1;
            if( answerNr == Common.questionList.get(index).getCorrectAnswer()){
                score++;
                correctAnswer++;
                showQuestion(++index);
            }*/
            /*RadioButton rbSelected = findViewById(rbGroup.getCheckedRadioButtonId());
            String  answerNr = rbSelected.getText().toString();
            if( answerNr == Common.questionList.get(index).getCorrectAnswer()){
                score++;
                correctAnswer++;
                showQuestion(++index);
            }*/

            Button clickedButton = (Button)view;
            if(clickedButton.getText().equals(Common.questionList.get(index).getCorrectAnswer())){
                //choose correct answer
                score+=10;
                int i = correctAnswer++;
//                showQuestion(++index); //next question
            }
            else {
                //Choose wrong answer
                Intent intent = new Intent(this, Done.class);
                Bundle dataSend = new Bundle();
                dataSend.putInt("SCORE", score);
                dataSend.putInt("TOTAL", totalQuestion);
                dataSend.putInt("CORRECT", correctAnswer);
                intent.putExtras(dataSend);
                startActivity(intent);
                finish();
            }
            txtScore.setText(String.format("%d",score));

        }
        /*startCountDown();*/
    }

    private void showQuestion(int index) {
        rbGroup.clearCheck();
        if( index < totalQuestion)
        {
            thisQuestion++;
            txtQuestionNum.setText(String.format("%d / %d", thisQuestion, totalQuestion));
            progressBar.setProgress(0);
            progressValue=0;

            if (Common.questionList.get(index).getIsImageQuestion().equals("true")){
                //if is image
                Picasso.get()
                        .load(Common.questionList.get(index).getQuestion())
                        .into(question_image);
                question_image.setVisibility(View.VISIBLE);
                question_text.setVisibility(View.INVISIBLE);
            }
            else {
                question_text.setText(Common.questionList.get(index).getQuestion());
                question_image.setVisibility(View.INVISIBLE);
                question_text.setVisibility(View.VISIBLE);
            }
            btnA.setText(Common.questionList.get(index).getAnswerA());
            btnB.setText(Common.questionList.get(index).getAnswerB());
            btnC.setText(Common.questionList.get(index).getAnswerC());
            btnD.setText(Common.questionList.get(index).getAnswerD());
            rbGroup.clearCheck();
            mCountDown.start(); // start timer

            timeLeftInMillis = COUNTDOWN_IN_MILLIS;
            startCountDown();
            answered = false;
            buttonConfirmNext.setText("Next");
        }
        else {
            //if it is final question
            Intent intent = new Intent(this, Done.class);
            Bundle dataSend = new Bundle();
            dataSend.putInt("SCORE", score);
            dataSend.putInt("TOTAL", totalQuestion);
            dataSend.putInt("CORRECT", correctAnswer);
            intent.putExtras(dataSend);
            startActivity(intent);
            finish();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        totalQuestion =Common.questionList.size();

        mCountDown = new CountDownTimer(TIMEOUT, INTERVAL) {
            @Override
            public void onTick(long minisec) {
                progressBar.setProgress(progressValue);
                progressValue++;
            }

            @Override
            public void onFinish() {
                mCountDown.cancel();
                countDownTimer.cancel();
                showQuestion(++index);
            }
        };
        /*startCountDown();*/
        showQuestion(index);
        /*startCountDown();*/
    }

    private void startCountDown(){
        countDownTimer = new CountDownTimer(timeLeftInMillis, 1000) {
            @Override
            public void onTick(long millisUntilFinished) {
                timeLeftInMillis = millisUntilFinished;
                updateCountDownText();
            }

            @Override
            public void onFinish() {
                timeLeftInMillis = 0;
                updateCountDownText();
                /*checkAnswer();*/

            }
        }.start();
    }

    private void updateCountDownText(){
        int minutes = (int)(timeLeftInMillis / 1000) / 60;
        int seconds = (int) (timeLeftInMillis /1000) % 60;

        String timeFormatted = String.format(Locale.getDefault(), "%02d:%02d", minutes,seconds);

        textViewCountDown.setText(timeFormatted);

        if (timeLeftInMillis <10000) {
            textViewCountDown.setTextColor(Color.RED);
        } else {
            textViewCountDown.setTextColor(textColorDefaultCd);
        }
    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (countDownTimer !=null){
            countDownTimer.cancel();
        }
    }
}
